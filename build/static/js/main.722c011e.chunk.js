(this.webpackJsonpreact_music=this.webpackJsonpreact_music||[]).push([[0],{76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(19),c=a.n(r),u=a(9),i=a(22),s=a(11),l="update_test_note",o="change_project_name",d="change_project_bpm",v="play",b="stop",p="add_track",j="add_note",f="update_current_note",h="delete_bucket",y="add_bucket",O="init_project",m="speed_future_",k="mario",g=function(e){var t=e.on,a=e.value;return{type:l,payload:{on:t,value:a}}},x=function(){return{type:v}},N=function(){return{type:b}},I=function(e){var t=e.value,a=e.id,n=void 0===a?null:a,r=e.index,c=e.bucketId,u=e.trackId;return{type:j,payload:{value:t,id:n,index:r,bucketId:c,trackId:u}}};var C=a(29),B=a(103);function q(){var e=Object(B.a)();return{bpm:100,name:"New Project",playing:!1,testNote:{on:!1,value:""},shared:!1,tracks:Object(C.a)({},e,{name:"Track 1",sequence:[[],[],[],[],[],[],[],[]],nextId:9,baseNote:4,id:e,muted:!1,soloed:!1,currentNote:[],volume:-8,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}})}}var A=function(e,t){return{name:"Track ".concat(e),sequence:[[],[],[],[],[],[],[],[]],nextId:0,baseNote:4,id:t,muted:!1,soloed:!1,currentNote:[],volume:0,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}}};a(73);var w=Object(i.b)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{bpm:100,name:"mario",tracks:{"4ebd49bd-114c-46ab-a346-805eb554f1ef":{baseNote:2,currentNote:[],id:"4ebd49bd-114c-46ab-a346-805eb554f1ef",muted:!1,name:"Coin",nextId:17,sequence:[[],[{id:13,value:"rest"},{id:16,value:"rest"},{id:11,value:"rest"},{id:14,value:"B5"}],[{id:15,value:"E6"}],[],[],[],[],[]],soloed:!1,volume:-20,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}},"bcfbc2d3-4e04-436a-8767-37353a0c4696":{baseNote:4,currentNote:[],id:"bcfbc2d3-4e04-436a-8767-37353a0c4696",muted:!1,name:"High Melody",nextId:50,sequence:[[{id:9,value:"C5"},{id:10,value:"rest"},{id:11,value:"rest"},{id:12,value:"G4"}],[{id:23,value:"rest"},{id:14,value:"rest"},{id:13,value:"E4"},{id:24,value:"rest"}],[{id:25,value:"rest"},{id:27,value:"A4"},{id:26,value:"rest"},{id:28,value:"B4"}],[{id:29,value:"rest"},{id:30,value:"A#4"},{id:31,value:"A4"},{id:32,value:"rest"}],[{id:33,value:"G4"},{id:34,value:"E5"},{id:35,value:"G5"}],[{id:36,value:"A5"},{id:37,value:"rest"},{id:38,value:"F5"},{id:39,value:"G5"}],[{id:40,value:"rest"},{id:41,value:"E5"},{id:15,value:"rest"},{id:42,value:"C5"}],[{id:43,value:"D5"},{id:44,value:"B4"},{id:17,value:"rest"},{id:22,value:"rest"}]],soloed:!1,volume:2,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}},"cba856c2-2d3b-4fb5-b31e-0a430c713f90":{baseNote:4,currentNote:[],id:"cba856c2-2d3b-4fb5-b31e-0a430c713f90",muted:!1,name:"Harmony Melody",nextId:42,sequence:[[{id:0,value:"E4"},{id:2,value:"rest"},{id:1,value:"rest"},{id:3,value:"C4"}],[{id:5,value:"rest"},{id:4,value:"rest"},{id:6,value:"G3"},{id:7,value:"rest"}],[{id:8,value:"rest"},{id:9,value:"C4"},{id:10,value:"rest"},{id:11,value:"D4"}],[{id:13,value:"rest"},{id:32,value:"C#4"},{id:15,value:"C4"},{id:12,value:"rest"}],[{id:16,value:"C4"},{id:17,value:"G4"},{id:18,value:"B4"}],[{id:31,value:"C5"},{id:20,value:"rest"},{id:21,value:"A4"},{id:22,value:"B4"}],[{id:23,value:"rest"},{id:24,value:"A4"},{id:25,value:"rest"},{id:26,value:"E4"}],[{id:27,value:"F4"},{id:28,value:"D4"},{id:29,value:"rest"},{id:30,value:"rest"}]],soloed:!1,volume:-6,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}},"cdf1002a-1c03-4f50-915d-7c7b3764d961":{baseNote:8,currentNote:[],id:"cdf1002a-1c03-4f50-915d-7c7b3764d961",muted:!1,name:"Bass",nextId:37,sequence:[[{id:14,value:"C3"},{id:32,value:"G2"}],[{id:33,value:"F2"},{id:34,value:"E2"}],[{id:22,value:"E3"},{id:23,value:"F3"}],[{id:27,value:"E3"},{id:28,value:"D3"}]],soloed:!1,volume:0,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}}},playing:!1,testNote:{on:!1,value:""}},a=arguments.length>1?arguments[1]:void 0;switch(e=Object(s.a)({},t),a.type){case l:return e.testNote=a.payload,e;case o:return e.name=a.name,e;case d:return e.bpm=a.bpm,e;case b:return e.playing=!1,e;case v:return e.playing=!0,e;case p:var n=Object(s.a)({},e.tracks),r=Object.keys(n),c=Object(B.a)();return n[c]=A(r.length+1,c),e.tracks=n,e;case j:e=JSON.parse(JSON.stringify(t));var u=a.payload,i=u.value,g=u.index,x=u.bucketId,N=u.trackId,I={id:a.payload.id,value:i};return e.tracks[N].sequence[x].splice(g,0,I),e;case h:return(e=JSON.parse(JSON.stringify(t))).tracks[a.payload.trackId].sequence.splice(a.payload.bucketId,1),e;case y:return(e=JSON.parse(JSON.stringify(t))).tracks[a.payload.trackId].sequence.push([]),e;case f:var C=a.payload.noteIndex,w=a.payload.trackId,T=Object(s.a)({},e.tracks);return e.tracks=T,T[w]=Object(s.a)({},T[w]),T[w].currentNote=[a.payload.bucketId,C],e;case O:return 1!==Object.keys(t.tracks).length?e=Object(s.a)({},q()):(D(),e);case m:return e=Object(s.a)({},{bpm:60,name:"Speed-fuTure-",shared:!1,tracks:{"4ebd49bd-114c-46ab-a346-805eb554f1ef":{baseNote:4,currentNote:[],id:"4ebd49bd-114c-46ab-a346-805eb554f1ef",muted:!1,name:"Coin",nextId:17,sequence:[[{id:9,value:"E4"},{id:9,value:"B4"},{id:9,value:"G4"},{id:9,value:"B4"}],[{id:9,value:"E5"},{id:9,value:"B4"},{id:9,value:"G4"},{id:9,value:"B4"}],[{id:9,value:"C4"},{id:9,value:"G4"},{id:9,value:"E4"},{id:9,value:"G4"}],[{id:9,value:"C5"},{id:9,value:"G4"},{id:9,value:"E4"},{id:9,value:"G4"}],[{id:9,value:"D4"},{id:9,value:"A4"},{id:9,value:"F#4"},{id:9,value:"A4"}],[{id:9,value:"D5"},{id:9,value:"A4"},{id:9,value:"F#4"},{id:9,value:"A4"}],[{id:9,value:"B3"},{id:9,value:"F#4"},{id:9,value:"D4"},{id:9,value:"F#4"}],[{id:9,value:"B4"},{id:9,value:"F#4"},{id:9,value:"D4"},{id:9,value:"F#4"}]],soloed:!1,volume:-20,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}},"bcfbc2d3-4e04-436a-8767-37353a0c4696":{baseNote:4,currentNote:[],id:"bcfbc2d3-4e04-436a-8767-37353a0c4696",muted:!1,name:"High Melody",nextId:50,sequence:[[],[],[],[],[],[],[],[],[{id:0,value:"E4"},{id:0,value:"E4"},{id:0,value:"rest"},{id:0,value:"rest"}],[],[{id:9,value:"G3"},{id:9,value:"G3"},{id:9,value:"rest"},{id:9,value:"rest"}],[],[{id:9,value:"A3"},{id:9,value:"A3"},{id:9,value:"rest"},{id:9,value:"rest"}],[],[{id:9,value:"E3"},{id:9,value:"E3"},{id:9,value:"rest"},{id:9,value:"rest"}],[]],soloed:!1,volume:2,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}},"cba856c2-2d3b-4fb5-b31e-0a430c713f90":{baseNote:4,currentNote:[],id:"cba856c2-2d3b-4fb5-b31e-0a430c713f90",muted:!1,name:"Harmony Melody",nextId:42,sequence:[[],[],[],[],[],[],[],[],[{id:0,value:"B4"},{id:0,value:"B4"},{id:0,value:"rest"},{id:0,value:"rest"}],[],[{id:9,value:"C3"},{id:9,value:"C3"},{id:9,value:"rest"},{id:9,value:"rest"}],[],[{id:9,value:"D3"},{id:9,value:"D3"},{id:9,value:"rest"},{id:9,value:"rest"}],[],[{id:9,value:"B2"},{id:9,value:"B2"},{id:9,value:"rest"},{id:9,value:"rest"}],[]],soloed:!1,volume:-6,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}}},playing:!1,testNote:{on:!1,value:""}});case k:return e=Object(s.a)({},{bpm:100,name:"mario",tracks:{"4ebd49bd-114c-46ab-a346-805eb554f1ef":{baseNote:2,currentNote:[],id:"4ebd49bd-114c-46ab-a346-805eb554f1ef",muted:!1,name:"Coin",nextId:17,sequence:[[],[{id:13,value:"rest"},{id:16,value:"rest"},{id:11,value:"rest"},{id:14,value:"B5"}],[{id:15,value:"E6"}],[],[],[],[],[]],soloed:!1,volume:-20,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}},"bcfbc2d3-4e04-436a-8767-37353a0c4696":{baseNote:4,currentNote:[],id:"bcfbc2d3-4e04-436a-8767-37353a0c4696",muted:!1,name:"High Melody",nextId:50,sequence:[[{id:9,value:"C5"},{id:10,value:"rest"},{id:11,value:"rest"},{id:12,value:"G4"}],[{id:23,value:"rest"},{id:14,value:"rest"},{id:13,value:"E4"},{id:24,value:"rest"}],[{id:25,value:"rest"},{id:27,value:"A4"},{id:26,value:"rest"},{id:28,value:"B4"}],[{id:29,value:"rest"},{id:30,value:"A#4"},{id:31,value:"A4"},{id:32,value:"rest"}],[{id:33,value:"G4"},{id:34,value:"E5"},{id:35,value:"G5"}],[{id:36,value:"A5"},{id:37,value:"rest"},{id:38,value:"F5"},{id:39,value:"G5"}],[{id:40,value:"rest"},{id:41,value:"E5"},{id:15,value:"rest"},{id:42,value:"C5"}],[{id:43,value:"D5"},{id:44,value:"B4"},{id:17,value:"rest"},{id:22,value:"rest"}]],soloed:!1,volume:2,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}},"cba856c2-2d3b-4fb5-b31e-0a430c713f90":{baseNote:4,currentNote:[],id:"cba856c2-2d3b-4fb5-b31e-0a430c713f90",muted:!1,name:"Harmony Melody",nextId:42,sequence:[[{id:0,value:"E4"},{id:2,value:"rest"},{id:1,value:"rest"},{id:3,value:"C4"}],[{id:5,value:"rest"},{id:4,value:"rest"},{id:6,value:"G3"},{id:7,value:"rest"}],[{id:8,value:"rest"},{id:9,value:"C4"},{id:10,value:"rest"},{id:11,value:"D4"}],[{id:13,value:"rest"},{id:32,value:"C#4"},{id:15,value:"C4"},{id:12,value:"rest"}],[{id:16,value:"C4"},{id:17,value:"G4"},{id:18,value:"B4"}],[{id:31,value:"C5"},{id:20,value:"rest"},{id:21,value:"A4"},{id:22,value:"B4"}],[{id:23,value:"rest"},{id:24,value:"A4"},{id:25,value:"rest"},{id:26,value:"E4"}],[{id:27,value:"F4"},{id:28,value:"D4"},{id:29,value:"rest"},{id:30,value:"rest"}]],soloed:!1,volume:-6,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}},"cdf1002a-1c03-4f50-915d-7c7b3764d961":{baseNote:8,currentNote:[],id:"cdf1002a-1c03-4f50-915d-7c7b3764d961",muted:!1,name:"Bass",nextId:37,sequence:[[{id:14,value:"C3"},{id:32,value:"G2"}],[{id:33,value:"F2"},{id:34,value:"E2"}],[{id:22,value:"E3"},{id:23,value:"F3"}],[{id:27,value:"E3"},{id:28,value:"D3"}]],soloed:!1,volume:0,synth:{oscillator:{type:"triangle",detune:0},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},filter:{frequency:2e4,type:"lowpass",resonance:1}}},playing:!1,testNote:{on:!1,value:""}});default:return t}function D(){e.playing=!1,e.tracks=Object(s.a)({},e.tracks);var t=Object.keys(e.tracks)[0];e.tracks[t]=Object(s.a)({},e.tracks[t]),e.tracks[t].sequence=[[],[],[],[],[],[],[],[]]}})),T=(a(74),a(75),a(76),a(3)),D=a(4),E=a(6),S=a(5),_=(a(77),a(1)),P=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"header",children:Object(_.jsx)("span",{className:"header-title",children:"Acoustica-mixer"})})}}]),a}(n.Component),G=(a(79),function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"rc-footer",children:Object(_.jsx)("div",{className:"beian",children:Object(_.jsx)("a",{href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noreferrer",children:"\u6e1dICP\u59072021005847\u53f7-1"})})})}}]),a}(n.Component)),F=a(104),M=a(105),J="note",H=(a(80),a(81),function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).generateColor=function(e){if("rest"===e)return"#4C9393";var t=function(e){var t=e.charCodeAt();return"A"!==e&&"B"!==e||(t+=7),t-=66}(e[0]),a={2:[50,60,120],3:[70,50,100],4:[100,40,70],5:[120,30,10],6:[170,50,0]}[e[e.length-1]].map((function(e){return e+10*t}));return"rgb(".concat(a[0],", ").concat(a[1],", ").concat(a[2],")")},e}return Object(D.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.value,n="#F4A53F";return t.active||(n=this.generateColor(a)),Object(_.jsx)("div",{className:"note",style:{backgroundColor:n},children:(e=a,3===e.length?Object(_.jsxs)("span",{children:[e[0],Object(_.jsx)("sup",{className:"sharp",children:"\u266f"}),e[2]]}):Object(_.jsx)("span",{children:e}))})}}]),a}(n.Component));var R=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(T.a)(this,a),(n=t.call(this,e)).testNoteOn=function(){"rest"!==n.props.value&&n.updateTestNote({on:!0,value:n.props.value})},n.testNoteOff=function(){"rest"!==n.props.value&&n.updateTestNote({on:!1,value:n.props.value})},n.updateTestNote=n.props.updateTestNote,n}return Object(D.a)(a,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,a=e.value;return t((0,e.connectDropTarget)(Object(_.jsx)("div",{className:"note-in-keyboard",onMouseDown:this.testNoteOn,onMouseUp:this.testNoteOff,onDragStart:this.testNoteOff,children:Object(_.jsx)(H,{value:a})})))}}]),a}(n.Component),z={drop:function(e,t){return console.log("drop",t.getDropResult()),{keyboard:2}}},U=Object(F.a)(J,z,(function(e){return{connectDropTarget:e.dropTarget()}}))(R),K=Object(M.a)(J,{beginDrag:function(e){return{value:e.value,source:"keyboard"}},endDrag:function(e,t){t.didDrop()}},(function(e){return{connectDragSource:e.dragSource()}}))(U),L=Object(u.b)((function(e){return{testNote:e.testNote,state1:e}}),(function(e){var t={updateTestNote:g,addNote:I};return Object(i.a)(t,e)}))(K),Q=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderAccidentals=function(t){return Object(_.jsx)("div",{className:"keyboard-acc".concat(t.length),children:t.map((function(t,a){return Object(_.jsx)(L,{value:"".concat(t).concat(e.props.octave)},a)}))},t.length-2)},e}return Object(D.a)(a,[{key:"render",value:function(){return[this.renderAccidentals(["C#","D#"]),this.renderAccidentals(["F#","G#","A#"])]}}]),a}(n.Component),V=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return["C","D","E","F","G","A","B"].map((function(t,a){return Object(_.jsx)(L,{value:"".concat(t).concat(e.props.octave)},a)}))}}]),a}(n.Component),W=(a(82),function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"Keyboard",children:Object(_.jsxs)("div",{className:"keyboard-notes",children:[Object(_.jsxs)("div",{className:"keyboard-col",children:[Object(_.jsx)(V,{octave:2}),Object(_.jsx)(V,{octave:3}),Object(_.jsx)(V,{octave:4}),Object(_.jsx)(V,{octave:5}),Object(_.jsx)(V,{octave:6})]}),Object(_.jsxs)("div",{className:"keyboard-col",children:[Object(_.jsx)(Q,{octave:2}),Object(_.jsx)(Q,{octave:3}),Object(_.jsx)(Q,{octave:4}),Object(_.jsx)(Q,{octave:"5"}),Object(_.jsx)(Q,{octave:"6"})]})]})})}}]),a}(n.Component)),X=(a(83),function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"note-column",children:[Object(_.jsx)("div",{className:"rest-box",children:Object(_.jsx)(L,{value:"rest"})}),Object(_.jsx)(W,{})]})}}]),a}(n.Component));function Y(e){return e.testNote}function Z(e){return e.bpm}function $(e){return e.playing}function ee(e){return e.tracks}function te(e){return function(t){return t.tracks[e]}}function ae(e){return function(t){return t.tracks[e].sequence}}function ne(e){return"".concat(e.id,",").concat(Object.keys(e.tracks).length)}a(84);var re={changeProjectBpm:function(e){return{type:d,bpm:e}},play:x,stop:N},ce=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).changeProjectBpm=function(t){e.props.changeProjectBpm(1*t.target.value)},e.handlePlayStopClick=function(){e.props.playing?e.props.stop():e.props.play()},e.renderPlaying=function(){var t=e.props.playing?"stop":"play";return Object(_.jsx)("button",{className:"playstop-button button-dark",onClick:e.handlePlayStopClick,children:Object(_.jsx)("div",{className:t})})},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return Object(_.jsxs)("div",{className:"play-bpm",children:[this.renderPlaying(),Object(_.jsx)("input",{type:"number",className:"button-dark bpm-input",min:"20",max:"400",onChange:function(t){return e.changeProjectBpm(t)},value:this.props.bpm}),Object(_.jsx)("label",{htmlFor:"bpm",className:"bpm-label",children:"bpm"})]})}}]),a}(n.Component),ue=Object(u.b)((function(e){return{bpm:Z(e),playing:$(e)}}),re)(ce),ie=(a(85),{addNote:I,play:x,stop:N}),se=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handlePlayStopClick=function(){e.props.playing?e.props.stop():e.props.play()},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.active,n=e.connectDropTarget,r=e.isDragging?0:1;return n(Object(_.jsx)("div",{className:"note-in-bucket",style:{opacity:r},children:Object(_.jsx)(H,{value:t,active:a})}))}}]),a}(n.Component),le=Object(F.a)(J,{hover:function(e,t,a){},drop:function(e,t){var a=t.getItem();return"keyboard"===a.source&&(e.addNote({value:a.value,id:e.nextId,index:e.index,bucketId:e.bucketId,trackId:e.trackId}),t.getItem().value=a.value,t.getItem().source=null,t.getItem().noteIndex=e.index,t.getItem().bucketId=e.bucketId,t.getItem().id=e.nextId,t.getItem().trackId=e.trackId),{note_in_bucket:1}}},(function(e){return{connectDropTarget:e.dropTarget()}}))(se),oe=Object(u.b)((function(e){return{bpm:Z(e),playing:$(e)}}),ie)(le),de=(a(86),{addNote:I}),ve=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=this.props,t=e.notes,a=e.currentNote,n=e.bucketId,r=e.trackId,c=e.nextId,u=e.connectDropTarget,i=a[0]===n?"bucket bucket-playing":"bucket",s=t.map((function(e,t){var u=a[0]===n&&a[1]===t;return Object(_.jsx)(oe,{value:e.value,active:u,index:t,id:e.id,bucketId:n,nextId:c,trackId:r},t)}));return u(Object(_.jsx)("div",{className:i,children:s}))}}]),a}(n.Component),be={drop:function(e,t){if(!t.didDrop()){console.log("bucketgetItem",t.getItem());var a=t.getItem(),n=a.value,r=e.bucketId,c=e.trackId,u=e.nextId,i=e.length;"keyboard"===a.source&&e.addNote({value:n,bucketId:r,trackId:c,id:u,index:i})}}},pe=Object(F.a)(J,be,(function(e){return{connectDropTarget:e.dropTarget()}}))(ve),je=Object(u.b)((function(e,t){return{nextId:(a=t.trackId,function(e){return e.tracks[a].nextId})(e)};var a}),de)(pe),fe=(a(87),function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).deleteBtn=function(){var t=e.props,a=t.bucketId,n=t.trackId;e.props.deleteBucket({bucketId:a,trackId:n})},e}return Object(D.a)(a,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"bucket-container",children:[Object(_.jsx)(je,Object(s.a)({},this.props)),Object(_.jsx)("button",{onClick:this.deleteBtn,className:"delete-bucket button-dark",children:"\u2716"})]})}}]),a}(n.Component)),he={deleteBucket:function(e){var t=e.bucketId,a=e.trackId;return{type:h,payload:{bucketId:t,trackId:a}}}},ye=Object(u.b)(null,he)(fe),Oe=(a(88),function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleAddBucketClick=function(){var t=e.props,a=t.id;(0,t.addBucket)(a)},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this.props,t=e.sequence,a=e.currentNote,n=e.id,r=t.map((function(e,t){return Object(_.jsx)(ye,{notes:e,currentNote:a,bucketId:t,trackId:n},t)}));return Object(_.jsxs)("div",{className:"bucketrow",children:[r,Object(_.jsx)("button",{onClick:this.handleAddBucketClick,className:"button-light bucketrow-button",title:"add bucket",children:"+"})]})}}]),a}(n.Component)),me={addBucket:function(e){return{type:y,payload:{trackId:e}}}},ke=Object(u.b)(null,me)(Oe),ge=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentNote,a=e.sequence,n=e.id;return Object(_.jsx)("div",{children:Object(_.jsx)(ke,{sequence:a,currentNote:t,id:n})})}}]),a}(n.Component),xe=Object(u.b)((function(e,t){return te(t.id)(e)}),null)(ge),Ne=(a(89),{addTrack:function(){return{type:p}}}),Ie=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=Object.values(this.props.tracks).map((function(e){return 0!==e.sequence.length?Object(_.jsx)(xe,{id:e.id},e.id):Object(_.jsx)("div",{id:e.id},e.id)}));return Object(_.jsxs)("div",{className:"tracks",children:[e,Object(_.jsx)("button",{onClick:this.props.addTrack,className:"button-dark tracks-new",title:"create new track",children:"+"})]})}}]),a}(n.Component),Ce=Object(u.b)((function(e){return{tracks:ee(e)}}),Ne)(Ie),Be=(a(90),function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={editing:!1,value:e.props.value},e.handleClick=function(){e.setState({editing:!0,value:e.props.value})},e.handleSubmit=function(t){t.preventDefault(),e.handleBlur()},e.handleBlur=function(){""!==e.state.value?e.props.onBlur(e.state.value):e.setState({value:e.props.value}),e.setState({editing:!1})},e.handleChange=function(t){e.setState({value:t.target.value})},e.focusInput=function(){e.textInput.focus(),e.textInput.select()},e}return Object(D.a)(a,[{key:"componentDidUpdate",value:function(e,t){!t.editing&&this.state.editing&&this.focusInput()}},{key:"render",value:function(){var e=this,t=this.props,a=t.value,n=t.title;return this.state.editing?Object(_.jsx)("form",{onSubmit:this.handleSubmit,children:Object(_.jsx)("input",{type:"text",name:"input",title:n,className:"editable-text editable-text-input",value:this.state.value,onBlur:this.handleBlur,onChange:this.handleChange,ref:function(t){e.textInput=t}})}):Object(_.jsx)("div",{className:"editable-text editable-text-div",onClick:this.handleClick,children:Object(_.jsx)("span",{title:n,children:a})})}}]),a}(n.Component)),qe=a(102),Ae=a(106),we=a(107),Te=(a(91),{changeProjectName:function(e){return{type:o,name:e}},initProject:function(){return{type:O}},toSpeed_fuTure_:function(){return{type:m}},toMario:function(){return{type:k}}}),De=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:e.props.name},e.initProject=function(){e.props.initProject()},e.changeToSpeed_fuTure_=function(){e.props.toSpeed_fuTure_()},e.changeToMario=function(){e.props.toMario()},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return(0,this.props.connectDropTarget)(Object(_.jsxs)("div",{className:"project",children:[Object(_.jsxs)("div",{className:"project-header",children:[Object(_.jsx)("div",{className:"project-title",children:Object(_.jsx)(Be,{value:this.props.name,title:"\u7f16\u8f91\u9879\u76ee\u540d\u79f0",onBlur:function(t){e.props.changeProjectName(t)}})}),Object(_.jsx)(ue,{}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),Object(_.jsx)(qe.a,{icon:Object(_.jsx)(Ae.a,{}),size:"small",onClick:this.changeToSpeed_fuTure_,children:"\u4f53\u9a8c\u66f2\u76ee2 \u5bc4\u751f\u517dbgm"}),Object(_.jsx)(qe.a,{icon:Object(_.jsx)(we.a,{}),size:"small",onClick:this.initProject,children:"\u65b0\u5efa\u7a7a\u767d\u4e50\u7ae0"})]}),Object(_.jsx)(Ce,{})]}))}}]),a}(n.Component),Ee=Object(F.a)(J,{drop:function(e,t,a){return{id:e.id}}},(function(e,t){var a=t.getItem();return{connectDropTarget:e.dropTarget(),item:a,monitor:t}}))(De),Se=Object(u.b)((function(e){return Object(s.a)({},e)}),Te)(Ee),_e=a(101),Pe=a(59),Ge=(a(92),function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"app",children:[Object(_.jsx)(P,{}),Object(_.jsxs)("div",{className:"wrapper",children:[Object(_.jsx)(X,{}),Object(_.jsx)(Se,{})]}),Object(_.jsx)(G,{})]})}}]),a}(n.Component)),Fe=function(e){Object(E.a)(a,e);var t=Object(S.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return Object(_.jsx)(_e.a,{backend:Pe.a,children:Object(_.jsx)(Ge,{})})}}]),a}(n.Component),Me=Object(u.b)(null,null)(Fe),Je=a(13),He=a(61);var Re=function(e,t,a){var n,r=function(){var r;try{r=t(e.getState())}catch(c){return}r!==n&&(a(r,n),n=r)};return r(),e.subscribe(r)},ze=function(){function e(t,a){var n=this;Object(T.a)(this,e),this.onSequenceChange=function(e){n.part.removeAll(),n.part=n.initPart(e,n.baseNote),n.sequence=e},this.store=t,this.id=a;var r=te(a)(t.getState()),c=r.sequence,u=r.baseNote,i=r.synth;this.sequence=c,this.baseNote=u,this.filter=new Je.Filter(2e4,"lowpass",-96).toMaster(),this.synth=new Je.Synth({envelope:i.envelope,oscillator:i.oscillator}).connect(this.filter),this.part=this.initPart(c,u),this.synth.volume.value=-8,this.subscriptions=[Re(t,ae(a),this.onSequenceChange)]}return Object(D.a)(e,[{key:"initPart",value:function(e,t){var a=new Je.Part(this.partProcessor.bind(this),function(e,t){var a=[],n=[];return e.map((function(e){return e.length<1?[{value:"rest"}]:e})).forEach((function(e,r){e.forEach((function(c,u){var i=c.value,s=function(e,t,a,n){var r=n/4/e,c="0:".concat(r),u="0:".concat(t*(n/4));return[c,"".concat(u," + 0:").concat(a*r)]}(e.length,r,u,t),l=Object(He.a)(s,2),o=l[0],d=l[1];a.push({time:d,value:i,dur:o,noteIndex:u,bucketIndex:r}),n.push({noteIndex:u,bucketIndex:r})}))})),a}(e,t));return a.start(0),a.loop=!0,a.loopEnd="".concat(e.length,"*0:").concat(t/4),a}},{key:"partProcessor",value:function(e,t){var a=t.value,n=t.dur,r=t.bucketIndex,c=t.noteIndex;"rest"!==a&&this.synth.triggerAttackRelease(a,n,e),this.store.dispatch(function(e){var t=e.bucketId,a=e.noteIndex,n=e.trackId;return{type:f,payload:{bucketId:t,noteIndex:a,trackId:n}}}({bucketId:r,noteIndex:c,trackId:this.id}))}},{key:"deleteSelf",value:function(){this.subscriptions.forEach((function(e){return e()})),this.synth.dispose(),this.synth=null,this.part.dispose(),this.part=null}}]),e}();new(function(){function e(t){var a=this;Object(T.a)(this,e),this.handleBpmChange=function(e){Je.Transport.bpm.value=e},this.handleTestNoteChange=function(e){var t=e.on,n=e.value;t?a.synth.triggerAttack(n):a.synth.triggerRelease()},this.store=t,this.tracks=[],this.synth=(new Je.Synth).toMaster(),Je.Transport.bpm.value=t.getState().bpm,this.subscriptions=[Re(t,Y,this.handleTestNoteChange.bind(this)),Re(t,$,this.handlePlayingChange.bind(this)),Re(t,Z,this.handleBpmChange),Re(t,ne,this.handleProjectIdOrTrackCountChange.bind(this))]}return Object(D.a)(e,[{key:"handlePlayingChange",value:function(e){e?Je.Transport.start("+0.1"):Je.Transport.stop()}},{key:"handleProjectIdOrTrackCountChange",value:function(){this.tracks.forEach((function(e){e.deleteSelf()})),this.tracks=this.generateTracks()}},{key:"generateTracks",value:function(){var e=this;return Object.values(ee(this.store.getState())).map((function(t){var a=t.id;return new ze(e.store,a)}))}}]),e}())(w),document.documentElement.addEventListener("mousedown",(function(){"running"!==Je.context.state&&Je.context.resume()})),c.a.render(Object(_.jsx)(u.a,{store:w,children:Object(_.jsx)(Me,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.722c011e.chunk.js.map