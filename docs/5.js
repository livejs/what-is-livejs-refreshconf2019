(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{434:function(n,e,t){"use strict";t.r(e);t(420);var r=t(0),a=t.n(r),i=t(63),u=t.n(i),c=t(491),l=t.n(c),o=t(61),d=(t(492),t(62)),f=t.n(d),s=(t(493),t(16)),m=(t(496),t(494),t(507),t(495)),h=(t(2),t(497)),b=h.a.Slide,g=h.a.A,p=h.a.B,v=a.a.createElement(f.a,null,a.a.createElement("h3",null,"Fixture"),a.a.createElement("p",null,"In the DMX512 world you don't say light, but call it fixture"),a.a.createElement("p",null,"One of the most basic and cheapest fixtures is a LED Flat PAR like you can see in this picture and here on stage"),a.a.createElement("p",null,"A fixture usually has 1 or more functions. Each of these functions can be used individually"),a.a.createElement("p",null,"This fixture has 6 function, the first ist to display Red, Green & Blue"));e.default=a.a.createElement(b,{key:u()(),background:'url("media/dmx512_universe.jpg")',mixin:"--slide-color: white"},a.a.createElement(s.Plugins.Data,{luminave:[""]}),v,a.a.createElement(g,null,a.a.createElement(o.Title,null,"Universe")),a.a.createElement(p,null,a.a.createElement(l.a,{fit:!0,order:1},a.a.createElement(m.a,{src:"media/dmx512_connector.jpg",alt:"DMX512 connector"}))))},507:function(n,e,t){"use strict";t.d(e,"b",(function(){return m})),t.d(e,"c",(function(){return g})),t.d(e,"a",(function(){return v}));var r=t(4),a=t.n(r),i=t(0),u=t.n(i),c=t(2);function l(){var n=a()(["\n    font-size: 3em;\n"]);return l=function(){return n},n}function o(){var n=a()(["\n    margin: 1em 0 0 0;\n    font-size: 0.85em;\n"]);return o=function(){return n},n}function d(){var n=a()(["\n    --background: ",";\n\n    background: #fff;\n    width: 100%;\n    text-align: center;\n\n    font-weight: bold;\n    font-size: 2em;\n"]);return d=function(){return n},n}function f(){var n=a()(["\n    --background: ",";\n\n    background: var(--background, #fff);\n    color: #000;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    position: relative;\n    padding: .25em;\n    \n    :before {\n        counter-increment: number;\n        content: counter(number);\n        position: absolute;\n        display: block;\n        left: 0;\n        bottom: 0;\n        padding: 0.25em;\n\n        width: 35px;\n        height: 35px;\n        background: #fff;\n        text-align: center;\n    }\n\n    &.strobe {\n        animation: strobe 500ms steps(1, end) infinite;\n\n        @keyframes strobe {\n          74% {\n            background: white;\n          }\n          75% {\n            background: black;\n          }\n        }\n    }\n\n    &.uv {\n        box-shadow: 0 0 20px #5b1ccf;\n    }\n\n    &.active {\n        box-shadow: 0 0 0.5em rgba(0, 0, 0, .75);\n        filter: zoom(100%);\n    }\n\n    &.inactive {\n        filter: blur(5px) invert(100%);\n        transform: scale(0.75);\n\n    }\n"]);return f=function(){return n},n}function s(){var n=a()(["\n\n    --channels: ",";\n    --width: ",";\n    --height: ",";\n\n    width: var(--width, 100%);\n    height: var(--height, 50%);\n    display: grid;\n    grid-template-columns: repeat(var(--channels), 1fr);\n    column-gap: 1em;\n    justify-items: center;\n    counter-reset: number;\n"]);return s=function(){return n},n}var m=c.default.div(s(),(function(n){return n.channels}),(function(n){return n.width}),(function(n){return n.height})),h=c.default.div(f(),(function(n){return n.background})),b=c.default.div(d(),(function(n){return n.background})),g=c.default.div(o()),p=c.default.div(l()),v=function(n){var e=n.value,t=n.label;return u.a.createElement(h,n,u.a.createElement(b,n,t),n.children,u.a.createElement(p,null,e))}}}]);
//# sourceMappingURL=5.js.map