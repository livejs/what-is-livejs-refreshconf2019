(window.webpackJsonp=window.webpackJsonp||[]).push([[1,53],{420:function(n,t,e){"use strict";e.r(t),t.default={}},477:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(4),a=e.n(r);e(0);function o(){var n=a()(["\n  color: var(--theme-on-primary);\n  background: var(--theme-primary);\n  border-radius: 0.5rem;\n  box-shadow: 0 0 0 0.75rem var(--theme-primary);\n  line-height: 1em;\n  display: inline-block;\n  text-decoration: none;\n  font-size: 0.95em;\n\n  :hover {\n    filter: invert(100%);\n  }\n\n  &.medium {\n    font-size: 1.45em;\n  }\n\n  &.big {\n    font-size: 1.65em;\n  }\n"]);return o=function(){return n},n}var i=e(2).default.a(o())},478:function(n,t,e){"use strict";e.d(t,"c",(function(){return C})),e.d(t,"b",(function(){return P})),e.d(t,"a",(function(){return z}));var r=e(4),a=e.n(r),o=(e(0),e(2)),i=e(475),u=e.n(i);function c(){var n=a()(["\n  ","\n  ","\n  ","\n"]);return c=function(){return n},n}function l(){var n=a()(["\n  border-left: 10px solid #fff;\n"]);return l=function(){return n},n}function s(){var n=a()(["\n  border-radius: 50%;\n  border: 0.5em solid var(--theme-primary);\n"]);return s=function(){return n},n}function f(){var n=a()(["\n  height: 50vh;\n"]);return f=function(){return n},n}function d(){var n=a()(["\n  height: 40vh;\n"]);return d=function(){return n},n}function m(){var n=a()(["\n  height: 100vh;\n"]);return m=function(){return n},n}function v(){var n=a()(["\n  ",";\n  ",";\n"]);return v=function(){return n},n}function p(){var n=a()(["\n  ",";\n"]);return p=function(){return n},n}function g(){var n=a()(["\n  --background-size: 200% auto;\n"]);return g=function(){return n},n}function b(){var n=a()(["\n  background-repeat: no-repeat;\n"]);return b=function(){return n},n}function h(){var n=a()(["\n  --background-size: 80%;\n"]);return h=function(){return n},n}function y(){var n=a()(["\n  --background-position: top center;\n"]);return y=function(){return n},n}function O(){var n=a()(["\n  --background-position: top left;\n"]);return O=function(){return n},n}function j(){var n=a()(["\n  --background-position: top right;\n"]);return j=function(){return n},n}function w(){var n=a()(["\n  --width: 300px;\n  --height: 300px;\n"]);return w=function(){return n},n}var A=Object(o.css)(w()),B=Object(o.css)(j()),E=Object(o.css)(O()),S=(Object(o.css)(y()),Object(o.css)(h())),k=Object(o.css)(b()),x=Object(o.css)(g()),C=(Object(o.default)(u.a)(p(),A),Object(o.default)(u.a)(v(),x,B),o.default.img(m()),o.default.img(d())),P=o.default.img(f()),z=(Object(o.default)(C)(s()),Object(o.default)(i.FitImage)(l()));Object(o.default)(u.a)(c(),E,S,k)},479:function(n,t,e){"use strict";var r=e(0),a=e.n(r),o=e(61),i=e(8),u=e.n(i),c=e(9),l=e.n(c),s=e(10),f=e.n(s),d=e(5),m=e.n(d),v=e(11),p=e.n(v),g=e(1),b=e.n(g),h=e(66),y=e.n(h),O=(y.a,e(4)),j=e.n(O),w=e(2);function A(){var n=j()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return A=function(){return n},n}w.default.div(A());function B(){var n=j()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return B=function(){return n},n}w.default.div(B());function E(){var n=j()(["\n  font-style: italic\n"]);return E=function(){return n},n}w.default.span(E());function S(){var n=j()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return S=function(){return n},n}w.default.span(S());function k(){var n=j()(["\n  /* background: var(--theme-surface); */\n  /* box-shadow: 0 0 0 1rem var(--theme-surface); */\n  display: inline;\n"]);return k=function(){return n},n}function x(){var n=j()(["\n  animation: "," ease-in-out ","s infinite\n    backwards ","s;\n"]);return x=function(){return n},n}function C(){var n=j()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return C=function(){return n},n}var P=Object(w.keyframes)(C()),z=w.default.span(x(),P,(function(n){var t=n.time;return void 0===t?.85:t}),(function(n){var t=n.delay;return void 0===t?0:t})),M=w.default.div(k()),D=function(n){var t=n.text.split(""),e=t.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{style:r},t.map((function(t,r){var o=n.time/e*(e-r)*-1;return a.a.createElement(z,{key:r,time:n.time,delay:o},t)}))))};D.defaultProps={time:30};var F=D;function R(){var n=j()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return R=function(){return n},n}w.default.span(R());var U=e(496),I=e.n(U),J=(e(474),e(497)),q=e(14);function H(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function L(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?H(e,!0).forEach((function(t){I()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):H(e).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function N(){var n=j()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return N=function(){return n},n}var T=q.search.parse(window.location.href),V=T.present,X=(T.live,r.Component,w.default.div(N()));r.Component;function G(){var n=j()(["\n  width: 5vw;\n"]);return G=function(){return n},n}function K(){var n=j()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n\n  &.left {\n    align-items: flex-end;\n  }\n\n  &.right {\n    align-items: flex-start;\n  }\n"]);return K=function(){return n},n}function Q(){var n=j()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return Q=function(){return n},n}w.default.div(Q()),w.default.div(K()),w.default.div(G()),e(498),e(502),e(503);function W(){var n=j()(["\n  font-size: 0.65em;\n  color: #ccc;\n  margin: 0 0 0 3em;\n  font-style: italic;\n"]);return W=function(){return n},n}function Y(){var n=j()(["\n  font-size: 4.5rem;\n  --quote-border-color: transparent;\n  position: relative;\n\n  :before,\n  :after {\n    position: absolute;\n    font-size: 4em;\n    color: #ccc;\n  }\n\n  :before {\n    content: '“';\n    top: 0;\n    left: 0;\n  }\n\n  :after {\n    content: '”';\n    bottom: 0;\n    right: 0;\n    line-height: 0;\n  }\n"]);return Y=function(){return n},n}w.default.div(Y()),w.default.div(W());function Z(){var n=j()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return Z=function(){return n},n}w.default.span(Z());var $=e(65),_=e(13),nn=q.search.parse(window.location.href),tn=nn.present,en=nn.live,rn=nn.preview,an=function(n){var t=n.children;return void 0===tn&&void 0===en&&void 0===rn&&a.a.createElement(a.a.Fragment,null,t)},on=function(n){function t(n){var e;return u()(this,t),(e=l()(this,f()(t).call(this,n))).isPlaying=!1,e}return p()(t,n),m()(t,[{key:"componentDidUpdate",value:function(n){var t=document.getElementById("video");null!==t&&(this.props.isPlaying?(t.play(),this.isPlaying=!0):(t.pause(),this.isPlaying=!1))}},{key:"shouldComponentUpdate",value:function(n){return n.isPlaying!==this.isPlaying}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_.Preview,null,a.a.createElement(o.Title,null,"Video ",this.props.isPlaying?"playing":"paused"),a.a.createElement("br",null),a.a.createElement(o.Bold,null,this.props.src)),a.a.createElement(an,null,a.a.createElement("video",{controls:!1,id:"video",src:this.props.src,preload:"auto"})),a.a.createElement(_.Live,null,a.a.createElement("video",{controls:!1,id:"video",src:this.props.src,preload:"auto"})))}}]),t}(r.Component);function un(){var n=j()(["\n  position: absolute;\n  top: -4rem;\n  left: 0;\n  font-size: 2em;\n"]);return un=function(){return n},n}function cn(){var n=j()(["\n  --amount: ",";\n\n  width: var(--width, 100%);\n  height: var(--height, 100%);\n  display: grid;\n  grid-template-columns: repeat(var(--amount), 1fr);\n  column-gap: 1em;\n  justify-items: center;\n\n  > div {\n    width: 100%;\n    height: 100%;\n    position: relative;\n  }\n"]);return cn=function(){return n},n}var ln=w.default.div(cn(),(function(n){return n.amount})),sn=w.default.div(un());e.d(t,"c",(function(){return F})),e.d(t,"d",(function(){return $.a})),e.d(t,"e",(function(){return on})),e.d(t,"b",(function(){return ln})),e.d(t,"a",(function(){return sn}))},480:function(n,t,e){"use strict";var r=e(4),a=e.n(r),o=e(0),i=e.n(o),u=e(484),c=e(485),l=e(2);function s(){var n=a()(["\n  ",";\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n    'slotA slotB'\n    'slotC slotD';\n"]);return s=function(){return n},n}function f(){var n=a()(["\n  ",";\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n    'slotA slotB'\n    'slotA slotC';\n"]);return f=function(){return n},n}function d(){var n=a()(["\n  ",";\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n    'slotB slotC'\n    'slotA slotA';\n"]);return d=function(){return n},n}function m(){var n=a()(["\n  ",";\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n    'slotB slotA'\n    'slotC slotA';\n"]);return m=function(){return n},n}function v(){var n=a()(["\n  ",";\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n    'slotA slotA'\n    'slotB slotC';\n"]);return v=function(){return n},n}function p(){var n=a()(["\n  ",";\n  grid-template-columns: 3fr 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas: 'slotA slotB';\n"]);return p=function(){return n},n}function g(){var n=a()(["\n  ",";\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas: 'slotA slotB';\n"]);return g=function(){return n},n}function b(){var n=a()(["\n  ",";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr;\n  grid-template-areas:\n    'slotA'\n    'slotB';\n"]);return b=function(){return n},n}function h(){var n=a()(["\n  ",";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n    'slotA'\n    'slotB';\n"]);return h=function(){return n},n}function y(){var n=a()(["\n  ",";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas: 'slotA';\n"]);return y=function(){return n},n}function O(){var n=a()(["\n  ",";\n  display: grid;\n\n  [data-slot='A'] {\n    grid-area: slotA;\n  }\n\n  [data-slot='B'] {\n    grid-area: slotB;\n  }\n\n  [data-slot='C'] {\n    grid-area: slotC;\n  }\n\n  [data-slot='D'] {\n    grid-area: slotD;\n  }\n"]);return O=function(){return n},n}function j(){var n=a()(["\n  ",";\n  justify-content: center;\n"]);return j=function(){return n},n}function w(){var n=a()(["\n  ",";\n  justify-content: flex-end;\n"]);return w=function(){return n},n}function A(){var n=a()(["\n  ",";\n  justify-content: flex-start;\n"]);return A=function(){return n},n}function B(){var n=a()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return B=function(){return n},n}function E(){var n=a()(["\n  --default-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-family: var(--font-family, var(--default-font-family));\n  font-size: var(--font-size, 2rem);\n"]);return E=function(){return n},n}var S={AB:{},ABC:{}},k=S,x=Object(l.css)(E()),C={};function P(){var n=a()(["\n  ",";\n\n  [data-slot='A'],\n  [data-slot='B'],\n  [data-slot='C'],\n  [data-slot='D'] {\n      // ",";\n  }\n"]);return P=function(){return n},n}function z(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return z=function(){return n},n}function M(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return M=function(){return n},n}function D(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return D=function(){return n},n}function F(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return F=function(){return n},n}function R(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return R=function(){return n},n}function U(){var n=a()(["\n    ",";\n    [data-slot='A'] {\n        ",";\n        align-items: flex-start;\n    }\n"]);return U=function(){return n},n}C.base=Object(l.css)(B()),C.start=Object(l.css)(A(),C.base),C.end=Object(l.css)(w(),C.base),C.center=Object(l.css)(j(),C.base),S.base=Object(l.css)(O(),x),S.A=Object(l.css)(y(),S.base),S.AB.topBottom=Object(l.css)(h(),S.base),S.AB.topSmallBottomBig=Object(l.css)(b(),S.base),S.AB.leftRight=Object(l.css)(g(),S.base),S.AB.leftBigRightSmall=Object(l.css)(p(),S.base),S.ABC.top=Object(l.css)(v(),S.base),S.ABC.right=Object(l.css)(m(),S.base),S.ABC.bottom=Object(l.css)(d(),S.base),S.ABC.left=Object(l.css)(f(),S.base),S.ABCD=Object(l.css)(s(),S.base),e.d(t,"a",(function(){return I})),e.d(t,"b",(function(){return J})),e.d(t,"c",(function(){return q}));Object(c.createStyledMaster)(i.a.createElement(c.Master,null,i.a.createElement(c.Slot,{name:"A"})))(U(),k.A,u.vertical.center);var I=Object(c.createStyledMaster)(i.a.createElement(c.Master,null,i.a.createElement(c.Slot,{name:"A"}),i.a.createElement(c.Slot,{name:"B"})))(R(),k.AB.leftRight,u.vertical.center),J=(Object(c.createStyledMaster)(i.a.createElement(c.Master,null,i.a.createElement(c.Slot,{name:"A"}),i.a.createElement(c.Slot,{name:"B"})))(F(),k.AB.leftBigRightSmall,u.vertical.center),Object(c.createStyledMaster)(i.a.createElement(c.Master,null,i.a.createElement(c.Slot,{name:"A"}),i.a.createElement(c.Slot,{name:"B"})))(D(),k.AB.topBottom,u.vertical.center,u.vertical.start)),q=Object(c.createStyledMaster)(i.a.createElement(c.Master,null,i.a.createElement(c.Slot,{name:"A"}),i.a.createElement(c.Slot,{name:"B"})))(M(),k.AB.topSmallBottomBig,u.vertical.center,u.vertical.start);Object(c.createStyledMaster)(i.a.createElement(c.Master,null,i.a.createElement(c.Slot,{name:"A"}),i.a.createElement(c.Slot,{name:"B"}),i.a.createElement(c.Slot,{name:"C"})))(z(),k.ABC.right,u.vertical.start),Object(c.createStyledMaster)(i.a.createElement(c.Master,null,i.a.createElement(c.Slot,{name:"A"}),i.a.createElement(c.Slot,{name:"B"}),i.a.createElement(c.Slot,{name:"C"}),i.a.createElement(c.Slot,{name:"D"})))(P(),k.ABCD,u.vertical.center)}}]);
//# sourceMappingURL=1.js.map