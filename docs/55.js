(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{473:function(n,e,t){"use strict";t.r(e);t(420);var a=t(0),i=t.n(a),o=t(63),r=t.n(o),l=(t(489),t(61),t(490),t(62)),s=t.n(l),m=t(491),d=t(16),u=(t(494),t(2),t(495),t(492),t(493)),h=(t(64),t(488),m.Main.Slide),c=m.Main.A,g=i.a.createElement(s.a,null,i.a.createElement("h3",null,"Tims Stack: Diagram"),i.a.createElement("ul",null,i.a.createElement("li",null,"First of all we take a look at the computer that I'm using to run both luminave (lights) and modV (visuals). It must be a powerful machine to be able to use both applications at the same time and ensure that we always have 60 fps for smooth visuals."),i.a.createElement("li",null,"Attachted over USB is an Audio Interface that gets the audio signal directly from Jan. The signal is then used in modV to generate visuals that are in sync with the music because of live audio analysis."),i.a.createElement("li",null,"The visuals are then reduced in modV to only get a few colors out of them. Those colors are send over WebSocket to luminave, where luminave can use that information to control lights."),i.a.createElement("li",null,"luminave knows which lights exist and you can map the different colors that modV is providing to different lights. So whenever modV is giving us data, the lights are also updated."),i.a.createElement("li",null,"The lights get their data from the WebUSB DMX512 controller (which you can build yourself using an article that I wrote) which is working directly in the browser by leveraging WebUSB. It can transform the colors into DMX512 so that the lights understand it."),i.a.createElement("li",null,"Another consumer of the modV colors are these cyberpunk goggles. They contain a LED ring from Adafruit called NeoPixel and are updated over WiFi, also with a WebSocket connetion."),i.a.createElement("li",null,"In order to not use the UI of the software, there is also a MIDI controller in use that can control both luminave and modV at the same time using WebMIDI.")));e.default=i.a.createElement(h,{key:r()()},i.a.createElement(d.Plugins.Data,{luminave:[""]}),g,i.a.createElement(c,null,i.a.createElement(u.b,{src:"media/tims_stack_vj_lj_2019.svg",alt:"Tims Stack VJ LJ 2019"})))},488:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return d}));var a=t(4),i=t.n(a),o=(t(0),t(2));function r(){var n=i()(["\n  list-style: decimal;\n  text-align: right;\n  font-size: 2em;\n  padding-right: 0.25em;\n  margin: 0 0 0 0;\n  width: 95%;\n\n  > span {\n    display: block !important;\n  }\n\n  > span[style='--time:0;'] {\n  }\n\n  li {\n    position: relative;\n    text-align: left;\n    margin: 0 1.5em 0.75em 0;\n    padding-bottom: 0.25em;\n    padding-right: 0.5em;\n    width: 90%;\n    border-bottom: 5px solid var(--theme-primary-dark);\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: -1em;\n      top: 0;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n  }\n"]);return r=function(){return n},n}function l(){var n=i()(["\n  list-style: none;\n  text-align: right;\n  font-size: 2em;\n  padding-right: 0.25em;\n  margin: 0 0 0 0;\n  width: 95%;\n\n  > span {\n    display: block !important;\n  }\n\n  > span[style='--time:0;'] {\n  }\n\n  li {\n    position: relative;\n    text-align: left;\n    display: inline-block;\n    margin: 0 1.5em 0.75em 0;\n    padding-bottom: 0.25em;\n    padding-right: 0.5em;\n    width: 90%;\n    border-bottom: 5px solid var(--theme-primary-dark);\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: -1em;\n      top: 0;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n  }\n"]);return l=function(){return n},n}function s(){var n=i()(["\n  list-style: none;\n  text-align: left;\n  font-size: 3.5rem;\n  padding: 0;\n  margin: 0 0 0 0;\n  width: 100%;\n\n  > span {\n    display: block !important;\n  }\n\n  > span[style='--time:0;'] {\n  }\n\n  li {\n    position: relative;\n    line-height: 1.25em;\n    text-align: left;\n    display: inline-block;\n    margin: 0.25em 0 0.25em 0;\n    padding-bottom: 0.1em;\n    /* padding-right: 0.5em; */\n    width: 100%;\n    border-bottom: 1px solid var(--theme-primary-dark);\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: -1em;\n      top: 0;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n\n    &.light-border {\n      border-bottom: 1px solid var(--theme-primary);\n    }\n\n    &.space-top {\n      margin-top: 0.5em;\n    }\n  }\n  &.right li {\n    margin: 0.25em 0 0.25em 1.5em;\n    padding: 0;\n    width: auto;\n  }\n\n  &.center {\n    height: auto;\n  }\n\n  &.center li {\n    text-align: center;\n    padding: 0;\n    margin: 0.25em 0;\n    width: auto;\n  }\n"]);return s=function(){return n},n}var m=o.default.ul(s()),d=(o.default.ul(l()),o.default.ol(r()))}}]);
//# sourceMappingURL=55.js.map