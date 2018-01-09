!function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){"use strict";var n=t(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n);(0,t(7).registerPromiseWorker)(function(e){switch(e.method){case"compile":return(0,o.default)(e.code,e.config);case"getBabelVersion":try{return Babel.version}catch(e){return null}case"getAvailablePresets":return Babel?Object.keys(Babel.availablePresets).map(function(e){return{label:e,isPreLoaded:!0}}):[];case"loadScript":try{return importScripts(e.url),!0}catch(e){return!1}case"registerEnvPreset":try{return Babel.registerPreset("env",babelPresetEnvStandalone.default),!0}catch(e){return!1}}})},function(e,r,t){"use strict";function n(e,r){var t=r.envConfig,n=null,s=null,a=null,l=null,u={compiledSize:0,rawSize:new Blob([e],{type:"text/plain"}).size};if(t&&t.isEnvPresetEnabled){var c={};t.browsers&&(c.browsers=t.browsers.split(",").map(function(e){return e.trim()}).filter(function(e){return e})),t.isElectronEnabled&&(c.electron=t.electron),t.isNodeEnabled&&(c.node=t.node);var p=null;r.debugEnvPreset&&(p=function(e){a=(0,o.getDebugInfoFromEnvResult)(e)});var f={onPresetBuild:p,targets:c,useBuiltIns:!r.evaluate&&r.useBuiltIns};r.presets.push(["env",f])}try{var d=Babel.transform(e,{babelrc:!1,filename:"repl",presets:r.presets,sourceMap:r.sourceMap});if(n=d.code,r.sourceMap)try{l=JSON.stringify(d.map)}catch(e){console.error("Source Map generation failed: "+e)}r.prettify&&"undefined"!=typeof prettier&&(n=prettier.format(n,i)),u.compiledSize=new Blob([n],{type:"text/plain"}).size}catch(e){n=null,s=e.message,a=null,l=null}return{compiled:n,compileErrorMessage:s,envPresetDebugInfo:a,meta:u,sourceMap:l}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(2),i={bracketSpacing:!0,jsxBracketSameLine:!1,parser:"babylon",printWidth:80,semi:!0,singleQuote:!1,tabWidth:2,trailingComma:"none",useTabs:!1}},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.getDebugInfoFromEnvResult=r.persistedStateToEnvConfig=r.configToState=r.configArrayToStateMap=r.persistedStateToBabelState=r.replState=r.envConfigToTargetsString=void 0;var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i=t(3),s=t(4),a=n(s),l=t(5),u=n(l),c=(r.envConfigToTargetsString=function(e){var r=[];return e.isElectronEnabled&&e.electron&&r.push("Electron-"+e.electron),e.isNodeEnabled&&e.node&&r.push("Node-"+e.node),encodeURIComponent(r.join(","))},function(){var e=a.default.get("replState");return o({},i.replDefaults,e)}),p=function(){var e=u.default.parseQuery();return o({},i.replDefaults,e)},f=(r.replState=function(){return window.location.hash?p():c()},r.persistedStateToBabelState=function(e){return{availablePresets:[],build:e.build,circleciRepo:e.circleciRepo,didError:!1,isLoaded:!1,isLoading:!0,version:e.version}},r.configArrayToStateMap=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.reduce(function(e,t){return e[t.package||t.label]=f(t,!0===r[t.package||t.label]),e},{})},r.configToState=function(e){return{config:e,didError:!1,isEnabled:arguments.length>1&&void 0!==arguments[1]&&arguments[1],isLoaded:!0===e.isPreLoaded,isLoading:!1,plugin:null}});r.persistedStateToEnvConfig=function(e){var r=!!e.presets&&e.presets.split(",").indexOf("env")>=0,t={browsers:e.browsers,electron:i.envPresetDefaults.electron.default,isEnvPresetEnabled:r,isElectronEnabled:!1,isNodeEnabled:!1,node:i.envPresetDefaults.node.default};return decodeURIComponent(e.targets).split(",").forEach(function(e){try{var r=e.split("-"),n=r[0].toLowerCase(),o=parseFloat(r[1]);if(n)switch(n){case"electron":t.electron=o,t.isElectronEnabled=!0;break;case"node":t.node=o,t.isNodeEnabled=!0;break;default:console.warn('Unknown env target "'+n+'" specified')}}catch(e){console.error("Error parsing env preset configuration",e)}}),t},r.getDebugInfoFromEnvResult=function(e){var r=[];e.modulePlugin&&r.push("Using modules transform:\n  "+e.modulePlugin);var t=Object.keys(e.targets);return t.length&&r.push("Using targets:\n"+t.map(function(r){return"• "+r+": "+e.targets[r]}).join("\n")),e.transformationsWithTargets.length&&r.push("Using plugins:\n"+e.transformationsWithTargets.map(function(e){return"• "+e.name}).join("\n")),e.polyfillsWithTargets&&e.polyfillsWithTargets.length&&r.push("Using polyfills:\n"+e.polyfillsWithTargets.map(function(e){return"• "+e.name}).join("\n")),r.join("\n\n")}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={label:"Env Preset",package:"babel-preset-env-standalone",version:"0"},o={browsers:{placeholder:"> 2%, ie 11, safari > 9"},electron:{min:.3,default:1.5,step:.1},node:{min:.1,default:7.4,step:.1}},i={label:"Runtime Polyfill",package:"babel-polyfill",version:"6"},s=[{baseUrl:"https://unpkg.com",label:"Minify",package:"babili-standalone",version:"0"},{label:"Prettify",package:"prettier",version:"1.6.1"}],a={babili:!1,browsers:"",build:"",builtIns:!1,circleciRepo:"",code:"",debug:!1,evaluate:!1,fileSize:!1,isEnvPresetTabExpanded:!1,isPresetsTabExpanded:!1,isSettingsTabExpanded:!0,lineWrap:!0,meta:{compiledSize:0,rawSize:0},presets:"es2015,react,stage-2",prettier:!1,showSidebar:!0,targets:"",version:""};r.envPresetConfig=n,r.envPresetDefaults=o,r.pluginConfigs=s,r.runtimePolyfillConfig=i,r.replDefaults=a},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={get:function(e){try{return JSON.parse(window.localStorage.getItem(e))}catch(e){}},set:function(e,r){try{window.localStorage.setItem(e,JSON.stringify(r))}catch(e){}}};r.default=n},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(6),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=["babili","browsers","build","builtIns","code","debug","circleciRepo","evaluate","fileSize","lineWrap","presets","prettier","targets","version"],s=function(e){return o.default.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},a=function(e){return o.default.decompressFromBase64(e.replace(/-/g,"+").replace(/_/g,"/"))},l=function(e){return window.encodeURIComponent(e)},u=function(e){try{return window.decodeURIComponent(""+e)}catch(r){return e}},c=function(e,r,t){r.forEach(function(r){null!=e[r]&&(t[r]=e[r])})},p=function(){var e=document.location.hash.replace(/^#\?/,"").split("&").reduce(function(e,r){var t=r.split("="),n=decodeURIComponent(""+t[0]),o=decodeURIComponent(""+t[1]);return"true"!==o&&"false"!==o||(o="true"===o),e[n]=o,e},{}),r={};return c(e,i,r),null!=e.code_lz&&(r.code=a(e.code_lz||"")),r},f=function(e){var r=i.map(function(r){return null==e[r]?null:"code"===r?r+"_lz="+s(e.code):r+"="+l(e[r])}).filter(function(e){return e}).join("&");window.location.hash="?"+r};r.default={compress:s,decode:u,decompress:a,encode:l,parseQuery:p,updateQuery:f}},function(e,r,t){var n,o=function(){function e(e,r){if(!o[e]){o[e]={};for(var t=0;t<e.length;t++)o[e][e.charAt(t)]=t}return o[e][r]}var r=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={},i={compressToBase64:function(e){if(null==e)return"";var r=i._compress(e,6,function(e){return t.charAt(e)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(n){return e(t,r.charAt(n))})},compressToUTF16:function(e){return null==e?"":i._compress(e,15,function(e){return r(e+32)})+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:i._decompress(e.length,16384,function(r){return e.charCodeAt(r)-32})},compressToUint8Array:function(e){for(var r=i.compress(e),t=new Uint8Array(2*r.length),n=0,o=r.length;n<o;n++){var s=r.charCodeAt(n);t[2*n]=s>>>8,t[2*n+1]=s%256}return t},decompressFromUint8Array:function(e){if(null===e||void 0===e)return i.decompress(e);for(var t=new Array(e.length/2),n=0,o=t.length;n<o;n++)t[n]=256*e[2*n]+e[2*n+1];var s=[];return t.forEach(function(e){s.push(r(e))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,function(e){return n.charAt(e)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(t){return e(n,r.charAt(t))}))},compress:function(e){return i._compress(e,16,function(e){return r(e)})},_compress:function(e,r,t){if(null==e)return"";var n,o,i,s={},a={},l="",u="",c="",p=2,f=3,d=2,g=[],v=0,h=0;for(i=0;i<e.length;i+=1)if(l=e.charAt(i),Object.prototype.hasOwnProperty.call(s,l)||(s[l]=f++,a[l]=!0),u=c+l,Object.prototype.hasOwnProperty.call(s,u))c=u;else{if(Object.prototype.hasOwnProperty.call(a,c)){if(c.charCodeAt(0)<256){for(n=0;n<d;n++)v<<=1,h==r-1?(h=0,g.push(t(v)),v=0):h++;for(o=c.charCodeAt(0),n=0;n<8;n++)v=v<<1|1&o,h==r-1?(h=0,g.push(t(v)),v=0):h++,o>>=1}else{for(o=1,n=0;n<d;n++)v=v<<1|o,h==r-1?(h=0,g.push(t(v)),v=0):h++,o=0;for(o=c.charCodeAt(0),n=0;n<16;n++)v=v<<1|1&o,h==r-1?(h=0,g.push(t(v)),v=0):h++,o>>=1}p--,0==p&&(p=Math.pow(2,d),d++),delete a[c]}else for(o=s[c],n=0;n<d;n++)v=v<<1|1&o,h==r-1?(h=0,g.push(t(v)),v=0):h++,o>>=1;p--,0==p&&(p=Math.pow(2,d),d++),s[u]=f++,c=String(l)}if(""!==c){if(Object.prototype.hasOwnProperty.call(a,c)){if(c.charCodeAt(0)<256){for(n=0;n<d;n++)v<<=1,h==r-1?(h=0,g.push(t(v)),v=0):h++;for(o=c.charCodeAt(0),n=0;n<8;n++)v=v<<1|1&o,h==r-1?(h=0,g.push(t(v)),v=0):h++,o>>=1}else{for(o=1,n=0;n<d;n++)v=v<<1|o,h==r-1?(h=0,g.push(t(v)),v=0):h++,o=0;for(o=c.charCodeAt(0),n=0;n<16;n++)v=v<<1|1&o,h==r-1?(h=0,g.push(t(v)),v=0):h++,o>>=1}p--,0==p&&(p=Math.pow(2,d),d++),delete a[c]}else for(o=s[c],n=0;n<d;n++)v=v<<1|1&o,h==r-1?(h=0,g.push(t(v)),v=0):h++,o>>=1;p--,0==p&&(p=Math.pow(2,d),d++)}for(o=2,n=0;n<d;n++)v=v<<1|1&o,h==r-1?(h=0,g.push(t(v)),v=0):h++,o>>=1;for(;;){if(v<<=1,h==r-1){g.push(t(v));break}h++}return g.join("")},decompress:function(e){return null==e?"":""==e?null:i._decompress(e.length,32768,function(r){return e.charCodeAt(r)})},_decompress:function(e,t,n){var o,i,s,a,l,u,c,p=[],f=4,d=4,g=3,v="",h=[],b={val:n(0),position:t,index:1};for(o=0;o<3;o+=1)p[o]=o;for(s=0,l=Math.pow(2,2),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=t,b.val=n(b.index++)),s|=(a>0?1:0)*u,u<<=1;switch(s){case 0:for(s=0,l=Math.pow(2,8),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=t,b.val=n(b.index++)),s|=(a>0?1:0)*u,u<<=1;c=r(s);break;case 1:for(s=0,l=Math.pow(2,16),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=t,b.val=n(b.index++)),s|=(a>0?1:0)*u,u<<=1;c=r(s);break;case 2:return""}for(p[3]=c,i=c,h.push(c);;){if(b.index>e)return"";for(s=0,l=Math.pow(2,g),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=t,b.val=n(b.index++)),s|=(a>0?1:0)*u,u<<=1;switch(c=s){case 0:for(s=0,l=Math.pow(2,8),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=t,b.val=n(b.index++)),s|=(a>0?1:0)*u,u<<=1;p[d++]=r(s),c=d-1,f--;break;case 1:for(s=0,l=Math.pow(2,16),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=t,b.val=n(b.index++)),s|=(a>0?1:0)*u,u<<=1;p[d++]=r(s),c=d-1,f--;break;case 2:return h.join("")}if(0==f&&(f=Math.pow(2,g),g++),p[c])v=p[c];else{if(c!==d)return null;v=i+i.charAt(0)}h.push(v),p[d++]=i+v.charAt(0),f--,i=v,0==f&&(f=Math.pow(2,g),g++)}}};return i}();void 0!==(n=function(){return o}.call(r,t,r,e))&&(e.exports=n)},function(e,r,t){"use strict";function n(e){self.addEventListener("message",function(r){var t=r.data;try{var n=e(t.message);self.postMessage({message:n,uid:t.uid})}catch(e){self.postMessage({error:e.message,uid:t.uid})}})}function o(e){var r={},t=0;return e.addEventListener("message",function(e){var t=e.data,n=t.uid,o=t.error,s=t.message,a=i(r[n],2),l=a[0],u=a[1];delete r[n],null==o?l(s):u(o)}),{postMessage:function(n){var o=++t;return new Promise(function(t,i){r[o]=[t,i],e.postMessage({message:n,uid:o})})}}}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r.registerPromiseWorker=n,r.registerPromiseWorkerApi=o}]);