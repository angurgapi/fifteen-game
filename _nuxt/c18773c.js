(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{187:function(t,e,n){var content=n(189);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("60835984",content,!0,{sourceMap:!1})},188:function(t,e,n){"use strict";n(187)},189:function(t,e,n){var o=n(61)(!1);o.push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.newgame{text-transform:uppercase;background-color:#031940;color:#fcf4c5;font-weight:600;height:42px;width:120px;border-radius:5px;padding:3px}.game{margin-top:30px;height:500px;width:500px;border:2px solid rgba(0,0,0,.5);border-radius:5px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:10px;padding:10px;background-color:#fcf4c5}.tile{display:flex;align-items:center;justify-content:center;font-size:22px;color:#031940;border-radius:5px;background-color:#8fb7ba;box-shadow:0 3px 6px 2px rgba(0,0,0,.3)}@media(max-width:500px){.game{height:90vw;width:90vw}}",""]),t.exports=o},190:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{tilesList:this.shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""])}},methods:{shuffle:function(t){for(var i=t.length-1;i>0;i--){var e=Math.floor(Math.random()*(i+1)),n=[t[e],t[i]];t[i]=n[0],t[e]=n[1]}return t},move:function(){var t=event.target;if(parseInt(t.textContent)>0){for(var e=t.textContent,n=document.querySelectorAll(".tile"),o=0,i=0;i<16;i++)n[i].textContent==t.textContent&&(o=i);n[o-4]&&""==n[o-4].textContent?(n[o-4].textContent=e,t.textContent=""):n[o+4]&&""==n[o+4].textContent?(n[o+4].textContent=e,t.textContent=""):o%4&&""==n[o-1].textContent?(n[o-1].textContent=e,t.textContent=""):n[o+1]&&(o+1)%4&&""==n[o+1].textContent&&(n[o+1].textContent=e,t.textContent=""),this.checkWin()&&alert("you won!")}},newGame:function(){location.reload()},checkWin:function(){for(var t=[],i=0;i<16;i++)t.push(document.querySelectorAll(".tile")[i].textContent);if(""==t[15]){for(var e=0;e<15;e++)if(parseInt(t[e])>parseInt(t[e+1]))return!1;return!0}}}},r=(n(188),n(31)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("button",{staticClass:"newgame",on:{click:t.newGame}},[t._v("перемешать")]),t._v(" "),n("div",{staticClass:"game"},t._l(t.tilesList,(function(e){return n("div",{staticClass:"tile",on:{click:function(e){return t.move()}}},[t._v(t._s(e))])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);