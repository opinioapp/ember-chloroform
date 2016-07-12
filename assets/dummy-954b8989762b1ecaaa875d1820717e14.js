"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(i,r.default.modulePrefix),e.default=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("dummy/components/chloro-form",["exports","ember-chloroform/components/chloro-form"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/validated-input",["exports","ember-chloroform/components/validated-input"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/validated-submit",["exports","ember-chloroform/components/validated-submit"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports","ember","ember-cp-validations"],function(e,t,n){var a=(0,n.buildValidations)({username:(0,n.validator)("presence",!0),password:(0,n.validator)("presence",!0)});e.default=t.default.Controller.extend(a,{actions:{submit:function(){window.alert("submitted")}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType});a.map(function(){}),e.default=a}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:5,column:8},end:{line:7,column:8}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          This form has some validation errors!\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:7,column:8},end:{line:9,column:8}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          No Errors!\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:12,column:2},end:{line:16,column:2}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a},statements:[["inline","f.input",[],["valuePath","username","autofocus","autofocus","placeholder","your username"],["loc",[null,[13,4],[13,86]]]],["inline","f.input",[],["valuePath","password","type","password","placeholder","password goes here"],["loc",[null,[14,4],[14,85]]]],["inline","f.submit",[],["value","Login","class","button expanded"],["loc",[null,[15,4],[15,54]]]]],locals:["f"],templates:[]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:17,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","columns small-12 large-6 small-centered");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("h2");e.setAttribute(a,"class","title");var r=e.createTextNode("Ember Chloroform ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n    ");e.appendChild(n,a);var a=e.createElement("div"),r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[3]),i=new Array(3);return i[0]=e.createAttrMorph(r,"class"),i[1]=e.createMorphAt(r,1,1),i[2]=e.createMorphAt(a,5,5),i},statements:[["attribute","class",["subexpr","concat",["callout secondary ",["subexpr","if",[["get","this.validations.isInvalid",["loc",[null,[4,49],[4,75]]]],"alert","success"],[],["loc",[null,[4,45],[4,94]]]]],[],["loc",[null,[4,15],[4,96]]]]],["block","if",[["get","this.validations.isInvalid",["loc",[null,[5,14],[5,40]]]]],[],0,1,["loc",[null,[5,8],[9,15]]]],["block","chloro-form",[],["model",["subexpr","@mut",[["get","this",["loc",[null,[12,23],[12,27]]]]],[],[]],"action","submit"],2,null,["loc",[null,[12,2],[16,18]]]]],locals:[],templates:[e,t,n]}}())}),define("dummy/validators/alias",["exports","ember-cp-validations/validators/alias"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/belongs-to",["exports","ember-cp-validations/validators/belongs-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/collection",["exports","ember-cp-validations/validators/collection"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/confirmation",["exports","ember-cp-validations/validators/confirmation"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/date",["exports","ember-cp-validations/validators/date"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/dependent",["exports","ember-cp-validations/validators/dependent"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/ds-error",["exports","ember-cp-validations/validators/ds-error"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/exclusion",["exports","ember-cp-validations/validators/exclusion"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/format",["exports","ember-cp-validations/validators/format"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/has-many",["exports","ember-cp-validations/validators/has-many"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/inclusion",["exports","ember-cp-validations/validators/inclusion"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/length",["exports","ember-cp-validations/validators/length"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/messages",["exports","ember-cp-validations/validators/messages"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/number",["exports","ember-cp-validations/validators/number"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/presence",["exports","ember-cp-validations/validators/presence"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e.default.$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-chloroform",version:"0.1.2+666fa2e2"});