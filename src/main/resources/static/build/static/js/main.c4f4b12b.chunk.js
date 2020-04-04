(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{39:function(e,t,n){e.exports=n(68)},44:function(e,t,n){},65:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(32),u=n.n(c),i=(n(44),n(11)),l=n(6),o=n.n(l),s=n(9),m=n(8),f=n(71),v=n(69),p=n(70),d=n(72),E=function(e){var t=e.text,n=e.onClick;return a.a.createElement("input",{className:"button m-1",type:"button",value:t,onClick:n})},g=function(e){var t=e.handleCreateGame;return a.a.createElement(d.a,{className:"justify-content-center"},a.a.createElement(d.a.Item,null,a.a.createElement(E,{text:"Easy 9x9",onClick:function(){return t(9,9,10,"easy")}})),a.a.createElement(d.a.Item,null,a.a.createElement(E,{text:"Medium 16x16",onClick:function(){return t(16,16,40,"medium")}})),a.a.createElement(d.a.Item,null,a.a.createElement(E,{text:"Hard 16x30",onClick:function(){return t(16,30,99,"hard")}})))},h=n(21),O=n(20),b=function(e){var t=e.tile,n=e.open,r=e.toggleFlag,c=function(){switch(t.value){case 0:return"whitesmoke";case 1:return"green";case 2:return"orange";case 3:return"red";case 4:return"purple";default:return"black"}},u={color:c()},i={backgroundColor:"whitesmoke",color:c()},l=function(e){e.preventDefault(),t.isOpen||r()};return t.isFlagged?a.a.createElement("div",{className:"tile",onContextMenu:function(e){return l(e)}},a.a.createElement(O.b,{style:{color:"red",backgroundColor:"grey"}})):t.isOpen&&t.isMine?a.a.createElement(O.a,null):a.a.createElement("div",{className:"gridItem",style:t.isOpen?i:u,onClick:function(e){n()},onContextMenu:function(e){return l(e)}},t.isOpen&&0!==t.value?t.value:"")},y=function(e,t){return Array.from({length:e},(function(){return Array.from({length:t},(function(){return k()}))}))},k=function(){return{value:0,isOpen:!1,isFlagged:!1,isMine:!1}},x=function(e,t,n,r){for(var a=n;a>0;){var c=j(e),u=j(t);r[c][u].isMine||(r[c][u].isMine=!0,w(c,u,r),a-=1)}},j=function(e){return Math.floor(Math.random()*e)},w=function(e,t,n){try{C(e)&&C(t)&&M(e-1,t-1,n)&&(n[e-1][t-1].value+=1),I(e,n)&&t<n[0].length-1&&M(e+1,t+1,n)&&(n[e+1][t+1].value+=1),C(e)&&t<n[0].length-1&&M(e-1,t+1,n)&&(n[e-1][t+1].value+=1),I(e,n)&&C(t)&&M(e+1,t-1,n)&&(n[e+1][t-1].value+=1),C(e)&&M(e-1,t,n)&&(n[e-1][t].value+=1),I(e,n)&&M(e+1,t,n)&&(n[e+1][t].value+=1),t<n[0].length-1&&M(e,t+1,n)&&(n[e][t+1].value+=1),C(t)&&M(e,t-1,n)&&(n[e][t-1].value+=1)}catch(r){console.log(r)}},C=function(e){return e>0},I=function(e,t){return e<t.length-1},M=function(e,t,n){return!n[e][t].isMine},N=function(e,t,n){return 0===n[e][t].value&&!1===n[e][t].isMine},S=function(e,t,n){return e<0||t<0||e>n.length-1||t>n[0].length-1},F=function(e){return 0===e.length},T=function(e){return!e.isOpen&&!e.isMine},W=function(e){var t=e.board,n=e.isOver,r=e.setGameOver,c=e.updateBoard;if(!t)return null;var u=function(e,r){if(!n){if(i(e,r,t))return void l(e,r);var a=Object(h.a)(t);!function e(t,n,r){S(t,n,r)||r[t][n].isOpen||(r[t][n].isOpen=!0,N(t,n,r)&&(e(t-1,n-1,r),e(t+1,n+1,r),e(t-1,n+1,r),e(t+1,n-1,r),e(t,n-1,r),e(t-1,n,r),e(t,n+1,r),e(t+1,n,r)))}(e,r,a),c(a)}},i=function(e,t,n){return n[e][t].isMine},l=function(e,n){t[e][n].isOpen=!0,r()},o={display:"grid",gridTemplateColumns:"repeat(".concat(t[0].length,", 1.5rem)"),gridTemplateRows:"repeat(".concat(t.length,", 1.5rem)"),alignItems:"center",textAlign:"center",justifyItems:"center",justifyContent:"center"};return a.a.createElement("div",{style:o},t.map((function(e,r){return e.map((function(e,i){return a.a.createElement(b,{key:i,tile:e,open:function(){return u(r,i)},toggleFlag:function(){return function(e,r){if(!n){var a=Object(h.a)(t);a[e][r].isFlagged=!a[e][r].isFlagged,c(a)}}(r,i)}})}))})))},A=function(e){var t=e.game,n=e.setGame,r=e.handleIsWon;if(!t)return null;var c=function(e){n(Object(i.a)({},t,{board:e,isOn:!0})),function(e){var t=e.board.filter((function(e){return!F(e.filter(T))}));return F(t)}(t)&&r()};return a.a.createElement(v.a,null,a.a.createElement(p.a,null,a.a.createElement(W,{board:t.board,setGameOver:function(){n(Object(i.a)({},t,{isOver:!0,isOn:!1}))},updateBoard:function(e){return c(e)},isOver:t.isOver})))},G=n(18),B=n.n(G),H={findAll:function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("".concat("/results"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat("/results"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=(n(65),n(73)),J=n(75),R=function(e){var t=e.listItems,n=e.title,c=Object(r.useState)(5),u=Object(m.a)(c,2),i=u[0],l=u[1],o=t.sort((function(e,t){return e.time-t.time>0?1:-1})).slice(0,i);return a.a.createElement(Y.a,{className:"mb-2 mt-2"},a.a.createElement(Y.a.Header,null,a.a.createElement(Y.a.Title,null,n)),a.a.createElement(Y.a.Body,null,a.a.createElement(J.a,{variant:"flush"},o.map((function(e){return a.a.createElement(J.a.Item,{key:e.id},e.nickname," ",e.time)})),i<t.length&&a.a.createElement(J.a.Item,{action:!0,onClick:function(){return l(i+5)}},"Show more"))))},D=function(e){var t=e.results;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Best Results"),a.a.createElement(R,{title:"Easy",listItems:t.filter((function(e){return"easy"===e.difficulty}))}),a.a.createElement(R,{title:"Medium",listItems:t.filter((function(e){return"medium"===e.difficulty}))}),a.a.createElement(R,{title:"Hard",listItems:t.filter((function(e){return"hard"===e.difficulty}))}))},q=n(74),z=function(e){var t=e.time,n=e.setTime;return Object(r.useEffect)((function(){var e=setInterval((function(){return n(t+1)}),1e3);return function(){return clearInterval(e)}}),[t]),a.a.createElement(a.a.Fragment,null,t)},K=function(e){var t=e.game,n=e.handleNicknameChange,r=e.time,c=e.setTime;return a.a.createElement(v.a,{className:"justify-content-center mt-3"},a.a.createElement(p.a,{xs:12,sm:4},a.a.createElement(q.a,{className:"mb-2 mt-2",placeholder:"Your nickname",onChange:n}),a.a.createElement("p",{className:"float-left"},"Mines: ",t?t.mines:0),a.a.createElement("p",{className:"float-right"},"Seconds: ",t&&t.isOn?a.a.createElement(z,{time:r,setTime:c}):r)))},L=function(e){var t=e.game;if(!t)return null;var n={minHeight:"35px",width:"100%",color:t.isWon?"green":"red"};return a.a.createElement(v.a,{style:n},a.a.createElement(p.a,null,t.isOver&&a.a.createElement("h3",null,"You lost!"),t.isWon&&a.a.createElement("h3",null,"You Won!")))},P=function(){var e=Object(r.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(""),l=Object(m.a)(u,2),d=l[0],E=l[1],h=Object(r.useState)(0),O=Object(m.a)(h,2),b=O[0],k=O[1],j=Object(r.useState)([]),w=Object(m.a)(j,2),C=w[0],I=w[1];Object(r.useEffect)((function(){M()}),[]);var M=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.findAll();case 3:t=e.sent,I(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Ooops!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),N=function(e,t,n,r){var a={board:function(e,t,n){var r=y(e,t);return x(e,t,n,r),r}(e,t,n),mines:n,difficulty:r,isOver:!1,isWon:!1,isOn:!1};k(0),c(a)},S=function(){var e=Object(s.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(Object(i.a)({},n,{isWon:!0,isOn:!1})),t={nickname:""===d?"Anonymous":d,difficulty:n.difficulty,time:b},e.next=5,H.create(t);case 5:r=e.sent,I(C.concat(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Oops!");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(e){return c(e)},T=function(e){return k(e)};return a.a.createElement(f.a,{fluid:!0,className:"text-center"},a.a.createElement(v.a,{className:"banner"},a.a.createElement(p.a,null,a.a.createElement("h1",null,"Mine Sweeper"),a.a.createElement("p",null,"Swipe this to right"))),a.a.createElement(v.a,null,a.a.createElement(p.a,{xs:12,sm:3},a.a.createElement(D,{results:C})),a.a.createElement(p.a,{xs:12,sm:9},a.a.createElement(g,{handleCreateGame:function(e,t,n,r){return N(e,t,n,r)}}),a.a.createElement(K,{game:n,time:b,setTime:function(e){return T(e)},handleNicknameChange:function(e){return E(e.target.value)}}),a.a.createElement(L,{game:n}),a.a.createElement(A,{game:n,setGame:function(e){return F(e)},handleIsWon:S}))))};u.a.render(a.a.createElement(P,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c4f4b12b.chunk.js.map