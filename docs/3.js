(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{435:function(n,e,t){"use strict";t.r(e);var r=t(4),a=t.n(r),i=(t(420),t(0)),l=t.n(i),c=t(63),u=t.n(c),o=t(474),s=t.n(o),f=t(61),d=(t(475),t(62)),m=t.n(d),b=(t(476),t(16)),h=(t(479),t(477),t(483)),g=(t(478),t(2)),p=t(480);function E(){var n=a()(["\n            display: contents !important;\n          "]);return E=function(){return n},n}function v(){var n=a()(["\n            display: contents !important;\n          "]);return v=function(){return n},n}function k(){var n=a()(["\n            display: contents !important;\n          "]);return k=function(){return n},n}function x(){var n=a()(["\n            display: contents !important;\n          "]);return x=function(){return n},n}var w=p.b.Slide,y=p.b.A,j=p.b.B,O=l.a.createElement(m.a,null,l.a.createElement("h3",null,"Fixture"),l.a.createElement("p",null,"In the DMX512 world you don't say light, but call it fixture"),l.a.createElement("p",null,"One of the most basic and cheapest fixtures is a LED Flat PAR like you can see in this picture and here on stage"),l.a.createElement("p",null,"A fixture usually has 1 or more functions. Each of these functions can be used individually"),l.a.createElement("p",null,"This fixture has 6 function, the first ist to display Red, Green & Blue"));e.default=l.a.createElement(w,{key:u()(),background:'url("media/flat_par.jpg")',mixin:"--slide-color: white"},l.a.createElement(b.Plugins.Data,{luminave:[""]}),O,l.a.createElement(y,null,l.a.createElement(f.Title,null,"Light (Fixture)"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(j,null,l.a.createElement(h.b,{channels:"6",width:"90%",height:"10em"},l.a.createElement(s.a,{order:1,mixin:Object(g.css)(x())},l.a.createElement(h.a,{background:"#f00",label:"Red"}),l.a.createElement(h.a,{background:"#0f0",label:"Green"}),l.a.createElement(h.a,{background:"#00f",label:"Blue"})),l.a.createElement(s.a,{order:2,mixin:Object(g.css)(k())},l.a.createElement(h.a,{background:"#5b1ccf",label:"UV",className:"uv"},l.a.createElement(h.c,null,"Ultraviolet"))),l.a.createElement(s.a,{order:3,mixin:Object(g.css)(v())},l.a.createElement(h.a,{background:"#fff",label:"Dimmer"},l.a.createElement(h.c,null,"Brightness"))),l.a.createElement(s.a,{order:4,mixin:Object(g.css)(E())},l.a.createElement(h.a,{background:"",label:"Strobe",className:"strobe"})))))},483:function(n,e,t){"use strict";t.d(e,"b",(function(){return m})),t.d(e,"c",(function(){return g})),t.d(e,"a",(function(){return E}));var r=t(4),a=t.n(r),i=t(0),l=t.n(i),c=t(2);function u(){var n=a()(["\n    font-size: 3em;\n"]);return u=function(){return n},n}function o(){var n=a()(["\n    margin: 1em 0 0 0;\n    font-size: 0.85em;\n"]);return o=function(){return n},n}function s(){var n=a()(["\n    --background: ",";\n\n    background: #fff;\n    width: 100%;\n    text-align: center;\n\n    font-weight: bold;\n    font-size: 2em;\n"]);return s=function(){return n},n}function f(){var n=a()(["\n    --background: ",";\n\n    background: var(--background, #fff);\n    color: #000;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    position: relative;\n    padding: .25em;\n    \n    :before {\n        counter-increment: number;\n        content: counter(number);\n        position: absolute;\n        display: block;\n        left: 0;\n        bottom: 0;\n        padding: 0.25em;\n\n        width: 35px;\n        height: 35px;\n        background: #fff;\n        text-align: center;\n    }\n\n    &.strobe {\n        animation: strobe 500ms steps(1, end) infinite;\n\n        @keyframes strobe {\n          74% {\n            background: white;\n          }\n          75% {\n            background: black;\n          }\n        }\n    }\n\n    &.uv {\n        box-shadow: 0 0 20px #5b1ccf;\n    }\n\n    &.active {\n        box-shadow: 0 0 0.5em rgba(0, 0, 0, .75);\n        filter: zoom(100%);\n    }\n\n    &.inactive {\n        filter: blur(5px) invert(100%);\n        transform: scale(0.75);\n\n    }\n"]);return f=function(){return n},n}function d(){var n=a()(["\n\n    --channels: ",";\n    --width: ",";\n    --height: ",";\n\n    width: var(--width, 100%);\n    height: var(--height, 50%);\n    display: grid;\n    grid-template-columns: repeat(var(--channels), 1fr);\n    column-gap: 1em;\n    justify-items: center;\n    counter-reset: number;\n"]);return d=function(){return n},n}var m=c.default.div(d(),(function(n){return n.channels}),(function(n){return n.width}),(function(n){return n.height})),b=c.default.div(f(),(function(n){return n.background})),h=c.default.div(s(),(function(n){return n.background})),g=c.default.div(o()),p=c.default.div(u()),E=function(n){var e=n.value,t=n.label;return l.a.createElement(b,n,l.a.createElement(h,n,t),n.children,l.a.createElement(p,null,e))}}}]);
//# sourceMappingURL=3.js.map