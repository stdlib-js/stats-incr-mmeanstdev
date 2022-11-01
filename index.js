// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((c="value"in a)&&(u.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=f):t[e]=a.value),y="get"in a,p="set"in a,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,a.get),p&&i&&i.call(t,e,a.set),t};function f(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",_=p()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[m],i=m,e=null!=(o=t)&&s.call(o,i);try{t[m]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[m]=r:delete t[m],n}:function(t){return b.call(t)},d=Number,v=d.prototype.toString,h=p();function g(t){return"object"==typeof t&&(t instanceof d||(h?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function j(t){return c(t)||g(t)}f(j,"isPrimitive",c),f(j,"isObject",g);var N=Number.POSITIVE_INFINITY,w=d.NEGATIVE_INFINITY,A=Math.floor;function O(t){return A(t)===t}function S(t){return t<N&&t>w&&O(t)}function T(t){return c(t)&&S(t)}function F(t){return g(t)&&S(t.valueOf())}function I(t){return T(t)||F(t)}function E(t){return T(t)&&t>0}function P(t){return F(t)&&t.valueOf()>0}function V(t){return E(t)||P(t)}function k(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&O(t.length)&&t.length>=0&&t.length<=4294967295}function x(t){return t!=t}f(I,"isPrimitive",T),f(I,"isObject",F),f(V,"isPrimitive",E),f(V,"isObject",P);var C=Math.sqrt,G="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,Y="function"==typeof Float64Array?Float64Array:void 0,q=function(){var t,e,r;if("function"!=typeof M)return!1;try{e=new M([1,3.14,-3.14,NaN]),r=e,t=(G&&r instanceof Float64Array||"[object Float64Array]"===_(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Y:function(){throw new Error("not implemented")};function D(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,e){var r,n,o,i,u,l,a,f,c,y;if(1===arguments.length)r=[0,0],a=t;else{if(!k(t))throw new TypeError(D("0eAAC",t));r=t,a=e}if(!E(a))throw new TypeError(D("0eAAD",a));return o=new q(a),c=a-1,u=0,l=0,y=-1,f=0,p;function p(t){var e,p;if(0===arguments.length)return 0===f?null:(r[0]=l,1===f?x(u)?r[1]=NaN:r[1]=0:r[1]=C(f<a?u/(f-1):u/c),r);if(y=(y+1)%a,x(t))f=a,l=NaN,u=NaN;else{if(f<a)return o[y]=t,u+=(n=t-l)*(t-(l+=n/(f+=1))),r[0]=l,r[1]=1===f?0:C(u/(f-1)),r;if(1===f)return l=t,u=0,r[0]=t,r[1]=0,r;if(x(o[y])){for(f=1,l=t,u=0,e=0;e<a;e++)if(e!==y){if(x(p=o[e])){f=a,l=NaN,u=NaN;break}u+=(n=p-l)*(p-(l+=n/(f+=1)))}}else!1===x(u)&&(i=o[y],u+=(n=t-i)*(i-l+(t-(l+=n/a))))}return o[y]=t,r[0]=l,r[1]=C(u/c),r}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmmeanstdev=e();
//# sourceMappingURL=index.js.map
