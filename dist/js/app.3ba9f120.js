(function(e){function t(t){for(var s,o,c=t[0],i=t[1],l=t[2],d=0,p=[];d<c.length;d++)o=c[d],a[o]&&p.push(a[o][0]),a[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"2df4":function(e,t,n){"use strict";var s=n("572c"),a=n.n(s);a.a},"343c":function(e,t,n){"use strict";var s=n("6771"),a=n.n(s);a.a},"491c":function(e,t,n){},"4cc9":function(e,t,n){"use strict";var s=n("491c"),a=n.n(s);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("cinema")],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"cinema"},[e.selectedSeats.length?n("preview",{attrs:{"selected-seats-prop":e.selectedSeats},on:{"start-reservation":function(t){return e.startReservation(t)}}}):e._e(),n("div",{staticClass:"screen"}),n("div",{staticClass:"rows"},e._l(e.cinema.left,function(t,s){return n("row",{key:"row-left-"+s,attrs:{"row-prop":t,"side-prop":"left"},on:{"seat-selected":function(t){return e.collectSeats(t)}}})}),1),n("div",{staticClass:"rows"},e._l(e.cinema.right,function(t,s){return n("row",{key:"row-right-"+s,attrs:{"row-prop":t,"side-prop":"right"},on:{"seat-selected":function(t){return e.collectSeats(t)}}})}),1)],1),e.modalIsVisible?n("modal",{on:{"show-modal":function(t){return e.showModal(t)}}}):e._e()],1)},c=[],i=n("75fc"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row",class:e.sideProp},e._l(e.rowProp,function(t,s){return n("seat",{key:"seat-"+s,attrs:{"seat-prop":t},on:{"seat-selected":function(t){return e.selectSeat(t)}}})}),1)},u=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"seat",class:{active:e.selected,disabled:e.disabled},on:{click:e.selectSeat}})},p=[],f=n("cebc"),m=n("2f62"),v={name:"seat",props:{seatProp:{type:String,default:""}},computed:Object(f["a"])({},Object(m["b"])(["getReservedSeats"])),data:function(){return{selected:!1,disabled:!1}},created:function(){var e=this;this.checkReservations(),this.$store.subscribe(function(t){"RESERVE_SEATS"===t.type&&e.checkReservations()})},methods:{selectSeat:function(){this.selected=!this.selected,this.$emit("seat-selected",{id:this.seatProp,type:this.selected?"add":"remove"})},checkReservations:function(){var e=this;this.getReservedSeats.map(function(t){t===e.seatProp&&(e.disabled=!0)})}}},h=v,b=(n("4cc9"),n("2877")),S=Object(b["a"])(h,d,p,!1,null,"17cdaa82",null),y=S.exports,_={name:"row",props:{rowProp:{type:Array,default:function(){return[]}},sideProp:{type:String,default:""}},components:{Seat:y},methods:{selectSeat:function(e){this.$emit("seat-selected",e)}}},w=_,g=(n("c4c7"),Object(b["a"])(w,l,u,!1,null,"4bcebeb9",null)),E=g.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"seats-preview"},[e._l(e.selectedSeatsProp,function(t,s){return n("span",{key:"seat-"+s},[e._v(e._s(t))])}),e.tooManySeatsSelected?n("h5",[e._v("Too many seats selected.")]):e._e(),n("button",{class:{disabled:e.tooManySeatsSelected},attrs:{type:"button"},on:{click:e.startReservation}},[e._v("Reserve selected seats")])],2)},x=[],P={name:"preview",props:{selectedSeatsProp:{type:Array,required:!0}},computed:{tooManySeatsSelected:function(){return this.selectedSeatsProp.length>this.selectedSeatsMax}},data:function(){return{selectedSeatsMax:5,selectedSeats:[]}},created:function(){this.selectedSeats=this.selectedSeatsProp},watch:{selectedSeatsProp:function(e){return this.selectedSeats=e}},methods:{startReservation:function(){this.$emit("start-reservation",!0)}}},C=P,O=(n("343c"),Object(b["a"])(C,R,x,!1,null,"57a9e606",null)),j=O.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal"},[n("div",{staticClass:"overlay",on:{click:function(t){return e.showModal(!1)}}}),n("div",{staticClass:"content"},[n("h4",[e._v("Reservation form")]),n("reservation-form",{on:{"show-modal":function(t){return e.showModal(t)}}})],1)])},$=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.submitted?n("div",{staticClass:"success"},[n("h4",[e._v("Great! Your tickets have been reserved.")])]):n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Write you name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],attrs:{type:"text",placeholder:"Write you surname"},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.payment,expression:"payment"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.payment=t.target.multiple?n:n[0]}}},[n("optgroup",{attrs:{label:"Choose your payment method"}},e._l(e.paymentTypes,function(t,s){return n("option",{key:"paymentType-"+s},[e._v(" "+e._s(t)+" ")])}),0)]),n("button",{staticClass:"reversed",class:{disabled:e.validate},attrs:{type:"submit"}},[e._v("Reserve seats")])])])},A=[],T=(n("7f7f"),n("5118")),I={name:"reservation-form",computed:{validate:function(){return!this.name||!this.surname||!this.payment}},data:function(){return{name:"",surname:"",payment:"",paymentTypes:["cash","credit card"],submitted:!1}},methods:{submit:function(){var e=this;this.validate||this.$nextTick(function(){e.submitted=!0,Object(T["setTimeout"])(function(){e.$emit("show-modal",!1)},3e3)})}}},J=I,B=(n("bdc8"),Object(b["a"])(J,M,A,!1,null,"5b91e29c",null)),D=B.exports,F={name:"modal",methods:{showModal:function(e){this.$emit("show-modal",e)}},components:{ReservationForm:D}},G=F,V=(n("c35c"),Object(b["a"])(G,k,$,!1,null,"d4a2b932",null)),H=V.exports,N={name:"cinema",data:function(){return{cinema:{left:[["A1","A2","A3","A4","A5","A6"],["B1","B2","B3","B4","B5","B6"],["C1","C2","C3","C4","C5","C6"],["D1","D2","D3","D4","D5","D6"],["E1","E2","E3","E4","E5","E6"]],right:[["F1","F2","F3","F4","F5","F6"],["G1","G2","G3","G4","G5","G6"],["H1","H2","H3","H4","H5","H6"],["I1","I2","I3","I4","I5","I6"],["J1","J2","J3","J4","J5","J6"]]},selectedSeats:[],modalIsVisible:!1}},components:{Row:E,Preview:j,Modal:H},methods:{collectSeats:function(e){var t=e.id,n=e.type;this.selectedSeats="add"===n?[].concat(Object(i["a"])(this.selectedSeats),[t]):this.selectedSeats.filter(function(e){return e!==t})},startReservation:function(){this.modalIsVisible=!0},showModal:function(e){this.modalIsVisible=e,this.$store.dispatch("collectReservedSeats",this.selectedSeats),this.selectedSeats=[]}}},W=N,q=(n("2df4"),Object(b["a"])(W,o,c,!1,null,"0033b164",null)),Y=q.exports,z={name:"app",components:{Cinema:Y}},K=z,L=(n("034f"),Object(b["a"])(K,a,r,!1,null,null,null)),Q=L.exports;s["a"].use(m["a"]);var U={reservedSeats:["A1","B3","E4"]},X={RESERVE_SEATS:function(e,t){e.reservedSeats=t}},Z={collectReservedSeats:function(e,t){var n=e.commit,s=e.state,a=s.reservedSeats.concat(t);n("RESERVE_SEATS",a)}},ee={getReservedSeats:function(e){return e.reservedSeats}},te=new m["a"].Store({state:U,mutations:X,actions:Z,getters:ee});s["a"].config.productionTip=!1,new s["a"]({store:te,render:function(e){return e(Q)}}).$mount("#app")},"572c":function(e,t,n){},"64a9":function(e,t,n){},6771:function(e,t,n){},bdc8:function(e,t,n){"use strict";var s=n("d2ef"),a=n.n(s);a.a},c35c:function(e,t,n){"use strict";var s=n("ed21"),a=n.n(s);a.a},c4c7:function(e,t,n){"use strict";var s=n("e654"),a=n.n(s);a.a},d2ef:function(e,t,n){},e654:function(e,t,n){},ed21:function(e,t,n){}});
//# sourceMappingURL=app.3ba9f120.js.map