// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function a(a,m){var d,l,o,f,j,p,h,u,v,g;if(1===arguments.length)d=[0,0],h=a;else{if(!t(a))throw new TypeError(n("invalid argument. Output argument must be an array-like object. Value: `%s`.",a));d=a,h=m}if(!e(h))throw new TypeError(n("invalid argument. Window size must be a positive integer. Value: `%s`.",h));return o=new i(h),v=h-1,j=0,p=0,g=-1,u=0,b;function b(e){var t,i;if(0===arguments.length)return 0===u?null:(d[0]=p,1===u?s(j)?d[1]=NaN:d[1]=0:d[1]=r(u<h?j/(u-1):j/v),d);if(g=(g+1)%h,s(e))u=h,p=NaN,j=NaN;else{if(u<h)return o[g]=e,j+=(l=e-p)*(e-(p+=l/(u+=1))),d[0]=p,d[1]=1===u?0:r(j/(u-1)),d;if(1===u)return p=e,j=0,d[0]=e,d[1]=0,d;if(s(o[g])){for(u=1,p=e,j=0,t=0;t<h;t++)if(t!==g){if(i=o[t],s(i)){u=h,p=NaN,j=NaN;break}j+=(l=i-p)*(i-(p+=l/(u+=1)))}}else!1===s(j)&&(f=o[g],j+=(l=e-f)*(f-p+(e-(p+=l/h))))}return o[g]=e,d[0]=p,d[1]=r(j/v),d}}export{a as default};
//# sourceMappingURL=index.mjs.map
