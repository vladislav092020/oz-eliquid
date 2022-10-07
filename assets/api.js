/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-theme-api/dist/api.es.js
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(){function n(e){t(this,n),this._api=e,this._registered=[]}return r(n,[{key:"register",value:function(t){var n=this,r=t.id,i=t.contact,a=t.values,u=void 0===a?{}:a,o=t.elements,s=void 0===o?{}:o,c=t.events,l=void 0===c?{}:c;if("string"!=typeof r||""===r)throw new Error("Integration ID cannot be empty.");if("string"!=typeof i||""===i)throw new Error("Integration contact cannot be empty.");return[["values",u],["elements",s],["events",l]].forEach(function(t){if("object"!==e(t[1]))throw new Error("Integration ".concat(t[0]," property must be of type object."));Object.keys(t[1]).forEach(function(e){if("function"!=typeof t[1][e])throw new Error("Integration ".concat(t[0]," property must contain a function as the value for each key, value pairing."))})}),this._registered=this._registered.filter(function(e){return e.id!==r}),this._registered.push({id:r,contact:i,values:u,elements:s,events:l}),Object.keys(u).forEach(function(e){return n.updateValue(e)}),Object.keys(s).forEach(function(e){return n.updateElement(e)}),!0}},{key:"updateValue",value:function(e){var t=this,n=this._api.theme.getValues(e);return n.length?Promise.all(n.map(function(e){return e&&e.initialValue?t._api.theme.updateValue(e.value.name,e.initialValue,e.params):Promise.resolve()})).then(function(){return!0}).catch(function(){return!1}):Promise.resolve(!1)}},{key:"updateElement",value:function(e){var t=this,n=this._api.theme.getElements(e);return n.length?Promise.all(n.map(function(e){return e?t._api.theme.updateElement(e.element.name,e.params):Promise.resolve()})).then(function(){return!0}).catch(function(){return!1}):Promise.resolve(!1)}},{key:"registered",get:function(){return this._registered}}]),n}();function l(e,t){if(e&&!t)return e;if(!e&&t)return t;if(!e&&!t)return{};var n={};return Object.keys(e).forEach(function(t){n[t]=e[t]}),Object.keys(t).forEach(function(e){n[e]=t[e]}),n}function f(e){var t=e.split(":");return 3===t.length?t[1]:null}var h=function(){function e(n,r){t(this,e),this._api=n,this._name=r,this._id=f(r),this._handle=function(e){var t=f(e);return t?e.replace(t,"<id>"):e}(r)}return r(e,[{key:"name",get:function(){return this._name}},{key:"id",get:function(){return this._id}},{key:"handle",get:function(){return this._handle}}]),e}();function m(e,t){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return t(e)})}),n}var v=function(e){function n(e,r){var i;return t(this,n),(i=o(this,a(n).call(this,e,r)))._activePromise=Promise.resolve(),i}return i(n,h),r(n,[{key:"update",value:function(e,t){var n=this,r=this._api.integrations.registered,i=e;return this._activePromise.then(function(){return m(r,function(r){return new Promise(function(a){var u=r.values[n._handle];if(!u)return a();var o=u({id:n._id,initialValue:e,value:i,params:t});o instanceof Promise?o.then(function(e){i=e,a()}):(i=o,a())})}).then(function(){return i})})}}]),n}(),p=function(e){function n(e,r,i){var u;return t(this,n),(u=o(this,a(n).call(this,e,r)))._container=i,u._results={},u._activePromise=Promise.resolve(),u}return i(n,h),r(n,[{key:"update",value:function(e){var t=this,n=this._api.integrations.registered;return this._activePromise.then(function(){return r={},i=[],m(n,function(n){return new Promise(function(a){var u=n.elements[t._handle];if(!u)return a();var o=u({id:t._id,params:e});o instanceof Promise?o.then(function(e){r[n.id]=e,i.push.apply(i,s(e.elements)),a()}):(r[n.id]=o,i.push.apply(i,s(o.elements)),a())})}).then(function(){return t.unload()}).then(function(){return i.forEach(function(e){return t._container.appendChild(e)})}).then(function(){t._results=r}).then(function(){return i});var r,i})}},{key:"unload",value:function(){var e=this;Object.keys(this._results).forEach(function(t){var n=e._results[t],r=n.elements;(0,n.onUnload)(),r.forEach(function(t){e._container.contains(t)&&e._container.removeChild(t)})}),this._results={}}}]),n}(),d=function(){function n(e){var r=this;t(this,n),this._api=e,this._values={},this._elements={},this._batchUpdate={values:[],elements:[]},this._isLoaded=!1;window.addEventListener("DOMContentLoaded",function e(){r._isLoaded=!0,r._batchUpdate.values.forEach(function(e){return e()}),r._batchUpdate.elements.forEach(function(e){return e()}),window.removeEventListener("DOMContentLoaded",e)})}return r(n,[{key:"getValues",value:function(e){var t=this;if(this._values[e])return[this._values[e]];var n=[];return Object.keys(this._values).forEach(function(r){var i=t._values[r];i.value.handle===e&&n.push(i)}),n}},{key:"getElements",value:function(e){var t=this;if(this._elements[e])return[this._elements[e]];var n=[];return Object.keys(this._elements).forEach(function(r){var i=t._elements[r];i.element.handle===e&&n.push(i)}),n}},{key:"useValue",value:function(t,n){var r={name:null,handler:null};return t&&"object"===e(t)&&!n?r=t:t&&"string"==typeof t&&n&&"function"==typeof n&&(r.name=t,r.handler=n),this._useValue(r)}},{key:"useElement",value:function(t,n){var r={name:null,container:null};return t&&"object"===e(t)&&!n?r=t:t&&"string"==typeof t&&n&&n instanceof HTMLElement&&(r.name=t,r.container=n),this._useElement(r)}},{key:"updateValue",value:function(e,t,n){var r=this,i=this._values[e];if(!this._isLoaded&&-1===this._batchUpdate.values.indexOf(i))return new Promise(function(t){r._batchUpdate.values.push(function(){return r.updateValue(e).then(function(e){return t(e)})})});if(i&&i.initialValue){var a=i.value,u=i.instances;if(u.length)return a.update(t,n).then(function(e){return Promise.all(u.map(function(t){return t.handler(e,n)})).then(function(){return e})})}return Promise.resolve()}},{key:"updateElement",value:function(e,t){var n=this,r=this._elements[e];return this._isLoaded||-1!==this._batchUpdate.elements.indexOf(r)?r?r.element.update(t):Promise.resolve():new Promise(function(t){n._batchUpdate.elements.push(function(){return n.updateElement(e).then(function(e){return t(e)})})})}},{key:"triggerEvent",value:function(e,t){var n=function(){},r=!1,i=!1;t&&"function"==typeof t.cancel&&(r=!0,n=function(){i=!0,t.cancel()});var a=this._api.integrations.registered;return Promise.all(a.map(function(i){if(i.events[e]){var a=i.events[e]({cancellable:r,cancel:n,params:t||{}});if(a instanceof Promise)return a}return Promise.resolve()})).then(function(){return i})}},{key:"_useValue",value:function(e){var t=this,n=e.name,r=e.handler,i=e.initialValue,a=e.params,u=this._createOrUpdateValue(n,i,a).value,o={name:u.name,id:u.id,handle:u.handle,handler:r,unload:function(){t._values[n].instances=t._values[n].instances.filter(function(e){return e.handler!==r}),t._values[n].instances.length||delete t._values[n]}};return this._values[n].instances.push(o),i&&this.updateValue(n,i),o}},{key:"_useElement",value:function(e){var t=this,n=e.name,r=e.container,i=e.params,a=this._createOrUpdateElement(n,r,i).element,u={name:a.name,id:a.id,handle:a.handle,unload:function(){a.unload(),delete t._elements[n]}};return this.updateElement(n,i),u}},{key:"_createOrUpdateValue",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this._values[e];return this._values[e]?(r.initialValue=t,r.params=l(r.params,n)):(r={value:new v(this._api,e),initialValue:t,params:n,instances:[]},this._values[e]=r),r}},{key:"_createOrUpdateElement",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this._elements[e];return this._elements[e]?r.params=l(r.params,n):(r={element:new p(this._api,e,t),params:n},this._elements[e]=r),r}}]),n}();/* harmony default export */ var api_es = (new(function(){function e(){t(this,e),this._integrationManager=new c(this),this._themeManager=new d(this)}return r(e,[{key:"version",get:function(){return"1.0.0"}},{key:"integrations",get:function(){return this._integrationManager}},{key:"theme",get:function(){return this._themeManager}}]),e}()));

;// CONCATENATED MODULE: ./source/scripts/api.js

window.api = api_es;
/******/ })()
;
//# sourceMappingURL=api.js.map?1618520204340