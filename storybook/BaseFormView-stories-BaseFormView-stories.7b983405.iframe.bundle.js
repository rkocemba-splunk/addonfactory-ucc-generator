(self.webpackChunk_splunk_ucc_ui_lib=self.webpackChunk_splunk_ucc_ui_lib||[]).push([[3248],{"./src/components/BaseFormView/stories/BaseFormView.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BothOauth:()=>BothOauth,OauthOauth:()=>OauthOauth,OuathBasic:()=>OuathBasic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BaseFormView_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),BaseFormView=__webpack_require__("./src/components/BaseFormView/BaseFormView.tsx"),PAGE_CONFIG_BOTH_OAUTH={pages:{configuration:{tabs:[{name:"account",table:{actions:["edit","delete","clone"],header:[{label:"Name",field:"name"},{label:"Auth Type",field:"auth_type"}]},entity:[{type:"text",label:"Name",validators:[{type:"string",errorMsg:"Length of ID should be between 1 and 50",minLength:1,maxLength:50},{type:"regex",errorMsg:"Name must begin with a letter and consist exclusively of alphanumeric characters and underscores.",pattern:"^[a-zA-Z]\\w*$"}],field:"name",help:"Enter a unique name for this account.",required:!0},{type:"text",label:"Endpoint URL",help:"Enter the endpoint URL.",field:"endpoint",options:{display:!1,requiredWhenVisible:!0}},{type:"oauth",field:"oauth",label:"Not used",options:{auth_type:["basic","oauth"],basic:[{oauth_field:"username",label:"Username",help:"Enter the username for this account.",field:"username"},{oauth_field:"password",label:"Password",encrypted:!0,help:"Enter the password for this account.",field:"password"},{oauth_field:"security_token",label:"Security Token",encrypted:!0,help:"Enter the security token.",field:"token"},{oauth_field:"some_text",label:"Disabled on edit for oauth",help:"Enter text for field disabled on edit",field:"basic_oauth_text",required:!1,options:{disableonEdit:!0}}],oauth:[{oauth_field:"client_id",label:"Client Id",field:"client_id",help:"Enter the Client Id for this account."},{oauth_field:"client_secret",label:"Client Secret",field:"client_secret",encrypted:!0,help:"Enter the Client Secret key for this account."},{oauth_field:"redirect_url",label:"Redirect url",field:"redirect_url",help:"Copy and paste this URL into your app."},{oauth_field:"endpoint_token",label:"Token endpoint",field:"endpoint_token",help:"Put here endpoint used for token acqusition ie. login.salesforce.com"},{oauth_field:"endpoint_authorize",label:"Authorize endpoint",field:"endpoint_authorize",help:"Put here endpoint used for authorization ie. login.salesforce.com"},{oauth_field:"oauth_some_text",label:"Disabled on edit for oauth",help:"Enter text for field disabled on edit",field:"oauth_oauth_text",required:!1,options:{disableonEdit:!0,enable:!1}}],auth_code_endpoint:"/services/oauth2/authorize",access_token_endpoint:"/services/oauth2/token",oauth_timeout:30,oauth_state_enabled:!1}}],title:"Account",restHandlerModule:"splunk_ta_uccexample_validate_account_rh",restHandlerClass:"CustomAccountValidator"}],title:"Configuration",description:"Set up your add-on"},inputs:{services:[{name:"example_input_one",entity:[{type:"text",label:"Name",validators:[{type:"regex",errorMsg:"Input Name must begin with a letter and consist exclusively of alphanumeric characters and underscores.",pattern:"^[a-zA-Z]\\w*$"},{type:"string",errorMsg:"Length of input name should be between 1 and 100",minLength:1,maxLength:100}],field:"name",help:"A unique name for the data input.",required:!0},{type:"checkbox",label:"Example Checkbox",field:"input_one_checkbox",help:"This is an example checkbox for the input one entity",defaultValue:!0}],title:"Example Input One"}],title:"Inputs",description:"Manage your data inputs",subDescription:{text:"Input page - Ingesting data from to Splunk Cloud? Have you tried the new Splunk Data Manager yet?\nData Manager makes AWS data ingestion simpler, more automated and centrally managed for you, while co-existing with AWS and/or Kinesis TAs.\nRead our [[blogPost]] to learn more about Data Manager and it's availability on your Splunk Cloud instance.",links:[{slug:"blogPost",link:"https://splk.it/31oy2b2",linkText:"blog post"}]},table:{actions:["edit","enable","delete","search","clone"],header:[{label:"Name",field:"name"}],moreInfo:[{label:"Name",field:"name"}]}}},meta:{name:"Splunk_TA_UCCExample",restRoot:"splunk_ta_uccexample",version:"5.41.0R9c5fbfe0",displayName:"Splunk UCC test Add-on",schemaVersion:"0.0.3",_uccVersion:"5.41.0"}},util=__webpack_require__("./src/util/util.ts");const BaseFormView_stories={title:"BaseFormView",render:function render(props){return(0,util.RA)(props.config),react.createElement(BaseFormView.A,{serviceName:props.serviceName,mode:props.mode,page:props.page,stanzaName:props.stanzaName,handleFormSubmit:props.handleFormSubmit})}};var OuathBasic={args:{currentServiceState:{},serviceName:"account",mode:"create",page:"configuration",stanzaName:"unknownStanza",handleFormSubmit:(0,dist.fn)(),config:function getConfigOauthBasic(){var _configCp$pages$confi,configCp=JSON.parse(JSON.stringify(PAGE_CONFIG_BOTH_OAUTH));return null!==(_configCp$pages$confi=configCp.pages.configuration.tabs[0].entity[2].options)&&void 0!==_configCp$pages$confi&&_configCp$pages$confi.auth_type&&(configCp.pages.configuration.tabs[0].entity[2].options.auth_type=["basic"]),configCp}()}},OauthOauth={args:{currentServiceState:{},serviceName:"account",mode:"create",page:"configuration",stanzaName:"unknownStanza",handleFormSubmit:(0,dist.fn)(),config:function getConfigOauthOauth(){var _configCp$pages$confi2,configCp=JSON.parse(JSON.stringify(PAGE_CONFIG_BOTH_OAUTH));return null!==(_configCp$pages$confi2=configCp.pages.configuration.tabs[0].entity[2].options)&&void 0!==_configCp$pages$confi2&&_configCp$pages$confi2.auth_type&&(configCp.pages.configuration.tabs[0].entity[2].options.auth_type=["oauth"]),configCp}()}},BothOauth={args:{currentServiceState:{},serviceName:"account",mode:"create",page:"configuration",stanzaName:"unknownStanza",handleFormSubmit:(0,dist.fn)(),config:PAGE_CONFIG_BOTH_OAUTH}};const __namedExportsOrder=["OuathBasic","OauthOauth","BothOauth"];OuathBasic.parameters={...OuathBasic.parameters,docs:{...OuathBasic.parameters?.docs,source:{originalSource:"{\n  args: {\n    currentServiceState: {},\n    serviceName: 'account',\n    mode: ('create' as Mode),\n    page: 'configuration',\n    stanzaName: 'unknownStanza',\n    handleFormSubmit: fn(),\n    config: (getConfigOauthBasic() as GlobalConfig)\n  }\n}",...OuathBasic.parameters?.docs?.source}}},OauthOauth.parameters={...OauthOauth.parameters,docs:{...OauthOauth.parameters?.docs,source:{originalSource:"{\n  args: {\n    currentServiceState: {},\n    serviceName: 'account',\n    mode: ('create' as Mode),\n    page: 'configuration',\n    stanzaName: 'unknownStanza',\n    handleFormSubmit: fn(),\n    config: (getConfigOauthOauth() as GlobalConfig)\n  }\n}",...OauthOauth.parameters?.docs?.source}}},BothOauth.parameters={...BothOauth.parameters,docs:{...BothOauth.parameters?.docs,source:{originalSource:"{\n  args: {\n    currentServiceState: {},\n    serviceName: 'account',\n    mode: ('create' as Mode),\n    page: 'configuration',\n    stanzaName: 'unknownStanza',\n    handleFormSubmit: fn(),\n    config: (PAGE_CONFIG_BOTH_OAUTH as GlobalConfig)\n  }\n}",...BothOauth.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/immutability-helper/index.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");function stringifiable(obj){return"object"!=typeof obj||"toString"in obj?obj:Object.prototype.toString.call(obj).slice(8,-1)}Object.defineProperty(exports,"__esModule",{value:!0});var isProduction="object"==typeof process&&!0;function invariant(condition,message){if(!condition){if(isProduction)throw new Error("Invariant failed");throw new Error(message())}}exports.invariant=invariant;var hasOwnProperty=Object.prototype.hasOwnProperty,splice=Array.prototype.splice,toString=Object.prototype.toString;function type(obj){return toString.call(obj).slice(8,-1)}var assign=Object.assign||function(target,source){return getAllKeys(source).forEach((function(key){hasOwnProperty.call(source,key)&&(target[key]=source[key])})),target},getAllKeys="function"==typeof Object.getOwnPropertySymbols?function(obj){return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj))}:function(obj){return Object.keys(obj)};function copy(object){return Array.isArray(object)?assign(object.constructor(object.length),object):"Map"===type(object)?new Map(object):"Set"===type(object)?new Set(object):object&&"object"==typeof object?assign(Object.create(Object.getPrototypeOf(object)),object):object}var Context=function(){function Context(){this.commands=assign({},defaultCommands),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(x,y){return x===y},this.update.newContext=function(){return(new Context).update}}return Object.defineProperty(Context.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(value){this.update.isEquals=value},enumerable:!0,configurable:!0}),Context.prototype.extend=function(directive,fn){this.commands[directive]=fn},Context.prototype.update=function(object,$spec){var _this=this,spec="function"==typeof $spec?{$apply:$spec}:$spec;Array.isArray(object)&&Array.isArray(spec)||invariant(!Array.isArray(spec),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),invariant("object"==typeof spec&&null!==spec,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(_this.commands).join(", ")+"."}));var nextObject=object;return getAllKeys(spec).forEach((function(key){if(hasOwnProperty.call(_this.commands,key)){var objectWasNextObject=object===nextObject;nextObject=_this.commands[key](spec[key],nextObject,spec,object),objectWasNextObject&&_this.isEquals(nextObject,object)&&(nextObject=object)}else{var nextValueForKey="Map"===type(object)?_this.update(object.get(key),spec[key]):_this.update(object[key],spec[key]),nextObjectValue="Map"===type(nextObject)?nextObject.get(key):nextObject[key];_this.isEquals(nextValueForKey,nextObjectValue)&&(void 0!==nextValueForKey||hasOwnProperty.call(object,key))||(nextObject===object&&(nextObject=copy(object)),"Map"===type(nextObject)?nextObject.set(key,nextValueForKey):nextObject[key]=nextValueForKey)}})),nextObject},Context}();exports.Context=Context;var defaultCommands={$push:function(value,nextObject,spec){return invariantPushAndUnshift(nextObject,spec,"$push"),value.length?nextObject.concat(value):nextObject},$unshift:function(value,nextObject,spec){return invariantPushAndUnshift(nextObject,spec,"$unshift"),value.length?value.concat(nextObject):nextObject},$splice:function(value,nextObject,spec,originalObject){return function invariantSplices(value,spec){invariant(Array.isArray(value),(function(){return"Expected $splice target to be an array; got "+stringifiable(value)})),invariantSplice(spec.$splice)}(nextObject,spec),value.forEach((function(args){invariantSplice(args),nextObject===originalObject&&args.length&&(nextObject=copy(originalObject)),splice.apply(nextObject,args)})),nextObject},$set:function(value,_nextObject,spec){return function invariantSet(spec){invariant(1===Object.keys(spec).length,(function(){return"Cannot have more than one key in an object with $set"}))}(spec),value},$toggle:function(targets,nextObject){invariantSpecArray(targets,"$toggle");var nextObjectCopy=targets.length?copy(nextObject):nextObject;return targets.forEach((function(target){nextObjectCopy[target]=!nextObject[target]})),nextObjectCopy},$unset:function(value,nextObject,_spec,originalObject){return invariantSpecArray(value,"$unset"),value.forEach((function(key){Object.hasOwnProperty.call(nextObject,key)&&(nextObject===originalObject&&(nextObject=copy(originalObject)),delete nextObject[key])})),nextObject},$add:function(values,nextObject,_spec,originalObject){return invariantMapOrSet(nextObject,"$add"),invariantSpecArray(values,"$add"),"Map"===type(nextObject)?values.forEach((function(_a){var key=_a[0],value=_a[1];nextObject===originalObject&&nextObject.get(key)!==value&&(nextObject=copy(originalObject)),nextObject.set(key,value)})):values.forEach((function(value){nextObject!==originalObject||nextObject.has(value)||(nextObject=copy(originalObject)),nextObject.add(value)})),nextObject},$remove:function(value,nextObject,_spec,originalObject){return invariantMapOrSet(nextObject,"$remove"),invariantSpecArray(value,"$remove"),value.forEach((function(key){nextObject===originalObject&&nextObject.has(key)&&(nextObject=copy(originalObject)),nextObject.delete(key)})),nextObject},$merge:function(value,nextObject,_spec,originalObject){return function invariantMerge(target,specValue){invariant(specValue&&"object"==typeof specValue,(function(){return"update(): $merge expects a spec of type 'object'; got "+stringifiable(specValue)})),invariant(target&&"object"==typeof target,(function(){return"update(): $merge expects a target of type 'object'; got "+stringifiable(target)}))}(nextObject,value),getAllKeys(value).forEach((function(key){value[key]!==nextObject[key]&&(nextObject===originalObject&&(nextObject=copy(originalObject)),nextObject[key]=value[key])})),nextObject},$apply:function(value,original){return function invariantApply(fn){invariant("function"==typeof fn,(function(){return"update(): expected spec of $apply to be a function; got "+stringifiable(fn)+"."}))}(value),value(original)}},defaultContext=new Context;function invariantPushAndUnshift(value,spec,command){invariant(Array.isArray(value),(function(){return"update(): expected target of "+stringifiable(command)+" to be an array; got "+stringifiable(value)+"."})),invariantSpecArray(spec[command],command)}function invariantSpecArray(spec,command){invariant(Array.isArray(spec),(function(){return"update(): expected spec of "+stringifiable(command)+" to be an array; got "+stringifiable(spec)+". Did you forget to wrap your parameter in an array?"}))}function invariantSplice(value){invariant(Array.isArray(value),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+stringifiable(value)+". Did you forget to wrap your parameters in an array?"}))}function invariantMapOrSet(target,command){var typeOfTarget=type(target);invariant("Map"===typeOfTarget||"Set"===typeOfTarget,(function(){return"update(): "+stringifiable(command)+" expects a target of type Set or Map; got "+stringifiable(typeOfTarget)}))}exports.isEquals=defaultContext.update.isEquals,exports.extend=defaultContext.extend,exports.default=defaultContext.update,exports.default.default=module.exports=assign(exports.default,exports)},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)}}}]);