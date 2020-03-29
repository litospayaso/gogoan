function _defineProperty(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function asyncGeneratorStep(n,e,i,t,r,o,s){try{var l=n[o](s),c=l.value}catch(a){return void i(a)}l.done?e(c):Promise.resolve(c).then(t,r)}function _asyncToGenerator(n){return function(){var e=this,i=arguments;return new Promise((function(t,r){var o=n.apply(e,i);function s(n){asyncGeneratorStep(o,t,r,s,l,"next",n)}function l(n){asyncGeneratorStep(o,t,r,s,l,"throw",n)}s(void 0)}))}}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,i){return e&&_defineProperties(n.prototype,e),i&&_defineProperties(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"lg/V":function(n,e,i){"use strict";i.r(e),i.d(e,"ion_infinite_scroll",(function(){return s})),i.d(e,"ion_infinite_scroll_content",(function(){return l}));var t=i("54nT"),r=i("AfW+"),o=i("YtD4"),s=function(){function n(e){var i=this;_classCallCheck(this,n),Object(t.k)(this,e),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var n=i.scrollEl;if(!n||!i.canStart())return 1;var e=i.el.offsetHeight;if(0===e)return 2;var t=n.scrollTop,r=n.offsetHeight,o=0!==i.thrPc?r*i.thrPc:i.thrPx;if(("bottom"===i.position?n.scrollHeight-e-t-o-r:t-e-o)<0){if(!i.didFire)return i.isLoading=!0,i.didFire=!0,i.ionInfinite.emit(),3}else i.didFire=!1;return 4},this.ionInfinite=Object(t.e)(this,"ionInfinite",7)}var e,i;return _createClass(n,[{key:"thresholdChanged",value:function(){var n=this.threshold;n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)}},{key:"disabledChanged",value:function(){var n=this.disabled;n&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)}},{key:"connectedCallback",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function n(){var e,i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=this.el.closest("ion-content"))){n.next=10;break}return n.next=4,e.getScrollElement();case 4:this.scrollEl=n.sent,this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(t.l)((function(){i.scrollEl&&(i.scrollEl.scrollTop=i.scrollEl.scrollHeight-i.scrollEl.clientHeight)})),n.next=11;break;case 10:console.error("<ion-infinite-scroll> must be used inside an <ion-content>");case 11:case"end":return n.stop()}}),n,this)}))),function(){return i.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function n(){var e,i,r=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=this.scrollEl,this.isLoading&&e&&(this.isLoading=!1,"top"===this.position)&&(this.isBusy=!0,i=e.scrollHeight-e.scrollTop,requestAnimationFrame((function(){Object(t.g)((function(){var n=e.scrollHeight-i;requestAnimationFrame((function(){Object(t.l)((function(){e.scrollTop=n,r.isBusy=!1}))}))}))})));case 2:case"end":return n.stop()}}),n,this)}))),function(){return e.apply(this,arguments)})},{key:"canStart",value:function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}},{key:"enableScrollEvents",value:function(n){this.scrollEl&&(n?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var n,e=Object(t.d)(this),i=this.disabled;return Object(t.i)(t.a,{class:(n={},_defineProperty(n,e,!0),_defineProperty(n,"infinite-scroll-loading",this.isLoading),_defineProperty(n,"infinite-scroll-enabled",!i),n)})}},{key:"el",get:function(){return Object(t.f)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}},{key:"style",get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}}]),n}(),l=function(){function n(e){_classCallCheck(this,n),Object(t.k)(this,e)}return _createClass(n,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var n=Object(t.d)(this);this.loadingSpinner=r.b.get("infiniteLoadingSpinner",r.b.get("spinner","ios"===n?"lines":"crescent"))}}},{key:"render",value:function(){var n,e=Object(t.d)(this);return Object(t.i)(t.a,{class:(n={},_defineProperty(n,e,!0),_defineProperty(n,"infinite-scroll-content-".concat(e),!0),n)},Object(t.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(t.i)("div",{class:"infinite-loading-spinner"},Object(t.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(t.i)("div",{class:"infinite-loading-text",innerHTML:Object(o.a)(this.loadingText)})))}}],[{key:"style",get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"}}]),n}()}}]);