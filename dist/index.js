"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(h,u){
var x=require('@stdlib/stats-base-dvariancepn/dist');function f(e,r,a,i){return x(e,r,a,i)}u.exports=f
});var c=n(function(k,s){
var j=require('@stdlib/stats-base-dvariancepn/dist').ndarray;function m(e,r,a,i,y){return j(e,r,a,i,y)}s.exports=m
});var o=n(function(w,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=c();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,p=E(_(__dirname,"./native.js"));O(p)?t=b:t=p;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
