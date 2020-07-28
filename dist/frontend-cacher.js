!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"Cacher",(function(){return n}));var n=function(){function e(){}return e.setConfig=function(t){e.storage=t.storage||localStorage,e.expirationTimeInHours=t.expirationTimeInHours||1},e.getItem=function(t){if(e.storage.getItem(t)&&t)return e.returnIfNotExpired(e.getResource(t),t)},e.removeItem=function(t){e.storage.removeItem(t)},e.prototype.clear=function(){e.storage.clear()},e.setItem=function(t,r,n){void 0===n&&(n=!1),e.hasValue(t,r)&&e.storage.setItem(t,JSON.stringify(e.buildCachedItem(r,n)))},Object.defineProperty(e,"expiresAt",{get:function(){var t=new Date;return t.setHours(t.getHours()+e.expirationTimeInHours)},enumerable:!1,configurable:!0}),e.buildCachedItem=function(t,r){return{value:t,expiresAt:e.expiresAt,neverExpire:r}},e.hasValue=function(e,t){return void 0!==t&&void 0!==e},e.expiresAtIsStillInFuture=function(e){return(new Date).getTime()<e.expiresAt},e.getResource=function(t){return JSON.parse(e.storage.getItem(t))},e.isSetToNeverExpire=function(e){return void 0!==e.neverExpire&&!0===e.neverExpire},e.returnIfNotExpired=function(t,r){return e.isSetToNeverExpire(t)||e.expiresAtIsStillInFuture(t)?t.value:void e.storage.removeItem(r)},e}()}]);