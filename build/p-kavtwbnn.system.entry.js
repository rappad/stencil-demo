System.register(["./p-cd4ad42c.system.js"],function(e){"use strict";var t,r;return{setters:[function(e){t=e.r;r=e.h}],execute:function(){var n=function(){function e(e){t(this,e)}e.prototype.normalize=function(e){if(e){return e.substr(0,1).toUpperCase()+e.substr(1).toLowerCase()}return""};e.prototype.render=function(){if(this.match&&this.match.params.name){return r("div",{class:"app-profile"},r("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My name was passed in through a route param!"))}};Object.defineProperty(e,"style",{get:function(){return".app-profile{padding:10px}"},enumerable:true,configurable:true});return e}();e("app_profile",n)}}});