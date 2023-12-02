// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function m(m,o){var d,a,l,f,j,h,p,v,b,c;if(1===arguments.length)d=[0,0],p=m;else{if(!s(m))throw new TypeError(n("1IX9a,Hy",m));d=m,p=o}if(!e(p))throw new TypeError(n("1IX9b,Hn",p));return l=new i(p),b=p-1,j=0,h=0,c=-1,v=0,g;function g(e){var s,i;if(0===arguments.length)return 0===v?null:(d[0]=h,1===v?t(j)?d[1]=NaN:d[1]=0:d[1]=r(v<p?j/(v-1):j/b),d);if(c=(c+1)%p,t(e))v=p,h=NaN,j=NaN;else{if(v<p)return l[c]=e,j+=(a=e-h)*(e-(h+=a/(v+=1))),d[0]=h,d[1]=1===v?0:r(j/(v-1)),d;if(1===v)return h=e,j=0,d[0]=e,d[1]=0,d;if(t(l[c])){for(v=1,h=e,j=0,s=0;s<p;s++)if(s!==c){if(i=l[s],t(i)){v=p,h=NaN,j=NaN;break}j+=(a=i-h)*(i-(h+=a/(v+=1)))}}else!1===t(j)&&(f=l[c],j+=(a=e-f)*(f-h+(e-(h+=a/p))))}return l[c]=e,d[0]=h,d[1]=r(j/b),d}}export{m as default};
//# sourceMappingURL=index.mjs.map
