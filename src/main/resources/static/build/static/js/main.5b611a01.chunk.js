(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{50:function(e,t,n){e.exports=n(78)},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),u=n.n(c),l=n(11),i=n.n(l),o=n(17),s=n(15),m=n(82),f=n(80),d=n(48),v=n(85),h=function(e){var t=e.text,n=e.onClick;return r.a.createElement("input",{className:"button m-1",type:"button",value:t,onClick:n})},E=function(e){var t=e.handleCreateGame;return r.a.createElement(v.a,{className:"justify-content-center mt-4"},r.a.createElement(v.a.Item,null,r.a.createElement(h,{text:"Easy 9x9",onClick:function(){return t(9,9,10,"easy")}})),r.a.createElement(v.a.Item,null,r.a.createElement(h,{text:"Medium 16x16",onClick:function(){return t(16,16,40,"medium")}})),r.a.createElement(v.a.Item,null,r.a.createElement(h,{text:"Hard 16x30",onClick:function(){return t(16,30,99,"hard")}})))},g=n(29),p=n(25),b=function(e){var t=e.tile,n=e.open,a=e.toggleFlag,c=function(e){e.preventDefault(),a()};return t.isFlagged?r.a.createElement(p.b,{className:"gridItem",onContextMenu:c,style:{color:"red",backgroundColor:"grey"}}):r.a.createElement("div",{className:"gridItem",onClick:n,onContextMenu:c})},O=function(e,t){return Array.from({length:e},(function(){return Array.from({length:t},(function(){return y()}))}))},y=function(){return{value:0,isOpen:!1,isFlagged:!1,isMine:!1}},k=function(e,t,n,a){for(var r=n;r>0;){var c=w(e),u=w(t);T(c,u,a)||(a[c][u].isMine=!0,x(c,u,a),r-=1)}},w=function(e){return Math.floor(Math.random()*e)},x=function(e,t,n){j(e-1,t-1,n),j(e+1,t+1,n),j(e-1,t+1,n),j(e+1,t-1,n),j(e-1,t,n),j(e+1,t,n),j(e,t-1,n),j(e,t+1,n)},j=function(e,t,n){S(e,t,n)||(n[e][t].value+=1)},C=function(e,t,n){if(!S(e,t,n)&&!F(e,t,n)){if(T(e,t,n))return n[e][t].isOpen=!0,!0;!function e(t,n,a){S(t,n,a)||a[t][n].isOpen||T(t,n,a)||(a[t][n].isOpen=!0,M(t,n,a)&&(e(t-1,n-1,a),e(t+1,n+1,a),e(t-1,n+1,a),e(t+1,n-1,a),e(t,n-1,a),e(t-1,n,a),e(t,n+1,a),e(t+1,n,a)))}(e,t,n)}return!1},S=function(e,t,n){return e<0||t<0||e>n.length-1||t>n[0].length-1},N=function(e,t){return e+t.filter(I).length},I=function(e){return!e.isOpen&&!e.isMine},M=function(e,t,n){return 0===n[e][t].value},F=function(e,t,n){return n[e][t].isFlagged},T=function(e,t,n){return n[e][t].isMine},G=function(e){var t=e.value,n=e.handleClick;return r.a.createElement("div",{className:"gridItem",style:{color:"".concat(function(){switch(t){case 0:return"whitesmoke";case 1:return"green";case 2:return"orange";case 3:return"red";case 4:return"purple";default:return"black"}}()),backgroundColor:"whitesmoke"},onClick:n,onContextMenu:function(e){return e.preventDefault()}},0===t?"":t)},A=function(e){var t=e.tile,n=e.openAdjacentTiles;return t.isMine?r.a.createElement(p.a,null):r.a.createElement(G,{value:t.value,handleClick:n})},R=function(e){var t=e.board,n=e.gameOver,a=e.handleSetGameOver,c=e.handleUpdateGame;if(!t)return null;var u=function(e,r){!n()&&function(e,t,n){for(var a=0,r=e-1;r<=e+1;r++)for(var c=t-1;c<=t+1;c++)!S(r,c,n)&&F(r,c,n)&&(a+=1);return a===n[e][t].value}(e,r,t)&&(!function(e,t,n){for(var a=e-1;a<=e+1;a++)for(var r=t-1;r<=t+1;r++)if(C(a,r,n))return!0;return!1}(e,r,t)?c(t):a())},l={display:"grid",gridTemplateColumns:"repeat(".concat(t[0].length,", 1.5rem)"),gridTemplateRows:"repeat(".concat(t.length,", 1.5rem)"),alignItems:"center",textAlign:"center",justifyItems:"center",justifyContent:"center"};return r.a.createElement("div",{style:l},t.map((function(e,l){return e.map((function(e,i){return e.isOpen?r.a.createElement(A,{key:i,tile:e,openAdjacentTiles:function(){return u(l,i)}}):r.a.createElement(b,{key:i,tile:e,open:function(){return function(e,r){n()||(C(e,r,t)?a():c(t))}(l,i)},toggleFlag:function(){return function(e,a){n()||(!function(e,t,n){n[e][t].isFlagged=!n[e][t].isFlagged}(e,a,t),c(t))}(l,i)}})}))})))},D=function(e){var t=e.game,n=e.handleSetGame,a=e.handleShowSaveResultDialog,c=e.handleShowNotification;if(!t)return null;var u=function(e){n(Object(g.a)({},t,{board:e,isOn:!0})),function(e){return 0===e.board.reduce(N,0)}(t)&&(n(Object(g.a)({},t,{isWon:!0,isOn:!1})),a())};return r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(R,{board:t.board,handleSetGameOver:function(){n(Object(g.a)({},t,{isOver:!0,isOn:!1})),c("Death by mine",!0)},handleUpdateGame:function(e){return u(e)},gameOver:function(){return t.isOver||t.isWon}})))},H=n(32),B=n.n(H),W={findAll:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("".concat("/results"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat("/results"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=n(87),J=n(86),U=n(81),q=function(e){var t=e.listItems,n=e.title,c=Object(a.useState)(5),u=Object(s.a)(c,2),l=u[0],i=u[1],o=t.sort((function(e,t){return e.time-t.time>0?1:-1})).slice(0,l);return r.a.createElement(Y.a,{className:"mb-2 mt-2"},r.a.createElement(Y.a.Header,null,r.a.createElement(Y.a.Title,{className:"text-center"},n)),r.a.createElement(Y.a.Body,null,0===t.length?"no results yet":r.a.createElement(J.a,{variant:"flush"},o.map((function(e){return r.a.createElement(J.a.Item,{key:e.id},e.nickname," ",r.a.createElement(U.a,{variant:"warning",className:"float-right"},e.time))})),l<t.length&&r.a.createElement(J.a.Item,{action:!0,onClick:function(){return i(l+5)}},"Show more"))))},L=function(e){var t=e.results;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"text-center mt-4"},"Best Results"),r.a.createElement(q,{title:"Easy",listItems:t.filter((function(e){return"easy"===e.difficulty}))}),r.a.createElement(q,{title:"Medium",listItems:t.filter((function(e){return"medium"===e.difficulty}))}),r.a.createElement(q,{title:"Hard",listItems:t.filter((function(e){return"hard"===e.difficulty}))}))},z=function(e){var t=e.time,n=e.setTime;return Object(a.useEffect)((function(){var e=setInterval((function(){return n(t+1)}),1e3);return function(){return clearInterval(e)}}),[t]),r.a.createElement(r.a.Fragment,null,t)},K=function(e){var t=e.game,n=e.time,a=e.setTime;if(!t)return null;var c=t.board.reduce((function(e,t){return e+t.filter((function(e){return e.isFlagged})).length}),0);return r.a.createElement(f.a,{className:"justify-content-center mt-3"},r.a.createElement(d.a,{xs:12,sm:4},r.a.createElement("h6",{className:"float-left"},"Mines: ",t.mines-c),r.a.createElement("h6",{className:"float-right"},"Seconds: ",t.isOn?r.a.createElement(z,{time:n,setTime:a,isOn:t.isOn}):n)))},P=function(e){var t=e.notification;return t.message?r.a.createElement(f.a,null,r.a.createElement(d.a,{className:"notification",style:{backgroundColor:t.isError?"red":"green"}},r.a.createElement("h2",null,t.message))):null},Q=n(83),V=n(84),X=function(e){var t=e.show,n=e.handleClose,a=e.handleNicknameChange,c=e.handleSaveResult,u=e.time;return r.a.createElement(Q.a,{show:t,onHide:n,centered:!0},r.a.createElement(Q.a.Header,null,r.a.createElement(Q.a.Title,null,"You won!")),r.a.createElement(Q.a.Body,null,r.a.createElement("h6",null,"Your time was ",u," seconds (not good, not bad)"),r.a.createElement(V.a.Label,null,"Give a nickname, if you want to save your result:"),r.a.createElement(V.a.Control,{className:"mb-2 mt-2",placeholder:"Your nickname",onChange:a})),r.a.createElement(Q.a.Footer,null,r.a.createElement(h,{text:"Save result",onClick:c}),r.a.createElement(h,{text:"No thanks",onClick:n})))},Z=(n(76),function(){var e=Object(a.useState)({message:"",isError:!1}),t=Object(s.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!1),l=Object(s.a)(u,2),v=l[0],h=l[1],g=Object(a.useState)(null),p=Object(s.a)(g,2),b=p[0],y=p[1],w=Object(a.useState)(""),x=Object(s.a)(w,2),j=x[0],C=x[1],S=Object(a.useState)(0),N=Object(s.a)(S,2),I=N[0],M=N[1],F=Object(a.useState)([]),T=Object(s.a)(F,2),G=T[0],A=T[1];Object(a.useEffect)((function(){H()}),[]);var R=function(e,t){c({message:e,isError:t}),setTimeout((function(){c({message:"",isError:!1})}),3e3)},H=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.findAll();case 3:t=e.sent,A(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),R("Error when Fetching results, is server up?",!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),B=function(e,t,n,a){var r={board:function(e,t,n){var a=O(e,t);return k(e,t,n,a),a}(e,t,n),mines:n,difficulty:a,isOver:!1,isWon:!1,isOn:!1};M(0),y(r)},Y=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(),t={nickname:""===j?"Anonymous":j,difficulty:b.difficulty,time:I},e.prev=2,e.next=5,W.create(t);case 5:n=e.sent,A(G.concat(n)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),R("Error when saving result, is server up?",!0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),J=function(e){return M(e)},U=function(){return h(!1)};return r.a.createElement(m.a,{fluid:!0},r.a.createElement(f.a,{className:"banner"},r.a.createElement(d.a,null,r.a.createElement("h1",{className:"text-center"},"Minesweeper"))),r.a.createElement(P,{notification:n}),r.a.createElement(X,{show:v,handleNicknameChange:function(e){return C(e.target.value)},handleSaveResult:Y,handleClose:U,time:I}),r.a.createElement(f.a,null,r.a.createElement(d.a,{xs:12,sm:3,style:{backgroundColor:"antiquewhite"}},r.a.createElement(L,{results:G})),r.a.createElement(d.a,{xs:12,sm:9},r.a.createElement(E,{handleCreateGame:function(e,t,n,a){return B(e,t,n,a)}}),r.a.createElement(K,{game:b,time:I,setTime:function(e){return J(e)}}),r.a.createElement(D,{game:b,handleSetGame:function(e){return y(e)},handleShowSaveResultDialog:function(){return h(!0)},handleShowNotification:R}))))});n(77);u.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.5b611a01.chunk.js.map