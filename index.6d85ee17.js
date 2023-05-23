!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},s=t.parcelRequire8630;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequire8630=s),s.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("e3qpK",(function(e,t){s("1Lurw"),s("jBTwX"),s("2fI9L"),s("fDle8"),s("cn2tS")})),s.register("1Lurw",(function(e,t){!function(){const e=window.location.pathname;if(e.endsWith("/")){return void document.querySelectorAll(`[href="${e}index.html"]`).forEach((e=>{e.classList.contains("page-nav__link")&&e.classList.add("page-nav__link--current")}))}document.querySelectorAll(`[href="${e}"]`).forEach((e=>{e.classList.contains("page-nav__link")&&e.classList.add("page-nav__link--current")}))}()})),s.register("jBTwX",(function(e,t){const n=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu");r.addEventListener("click",(function(){r.setAttribute("aria-expanded",!0),r.classList.add("menu-btn--hide"),i.classList.remove("menu-btn--hide"),n.classList.add("menu-container--is-open"),document.body.classList.add("body-lock")})),i.addEventListener("click",(function(){r.setAttribute("aria-expanded",!1),r.classList.remove("menu-btn--hide"),i.classList.add("menu-btn--hide"),n.classList.remove("menu-container--is-open"),document.body.classList.remove("body-lock")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&n.classList.contains("menu-container--is-open")&&(n.classList.remove("menu-container--is-open"),r.classList.remove("menu-btn--hide"),i.classList.add("menu-btn--hide"),r.setAttribute("aria-expanded",!1),document.body.classList.remove("body-lock"))})),window.addEventListener("resize",(()=>{const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}))})),s.register("2fI9L",(function(e,t){const n=document.querySelector(".js-user");n&&n.addEventListener("click",(()=>{window.innerWidth<768||n.classList.toggle("user--is-active-btns-box")}))})),s.register("fDle8",(function(e,t){const n="site-theme",r="light",i="dark",s=document.querySelector(".js-switcher-theme"),o=document.querySelector("html");s.addEventListener("click",(()=>{!function(e){const t=o.classList.contains("light");if(t&&e!==r)return localStorage.setItem(n,JSON.stringify(i)),void o.classList.replace("light","dark");e!==i&&(localStorage.setItem(n,JSON.stringify(r)),o.classList.replace("dark","light"))}(o.classList.contains("light")?i:r)}))})),s.register("cn2tS",(function(e,t){document.querySelectorAll(".js-page-nav").forEach((e=>{e.addEventListener("click",(e=>{e.target.classList.contains("page-nav__link--current")&&e.preventDefault()}))}))})),s.register("eH1tb",(function(t,n){e(t.exports,"default",(function(){return y}));var r=s("lRSMh"),i=s("gBQDP");s("gQOBw");var o=s("G0OFq"),a=s("fGeq0"),l=s("bc0hQ"),c=s("1R002"),u=s("bRxOZ"),d=s("2yFaI");const h=document.querySelector(".sign-up-form"),p=document.querySelector(".sign-in-form"),f=document.querySelector(".password-bar-container"),g=(0,o.o)(u.app),m=document.querySelector(".auth-component"),v=document.querySelector(".shopping-list__loader");let _=!1;var y=new class{signUp=e=>{e.preventDefault();const t=e.target.elements.name.value,n=e.target.elements.email.value,r=e.target.elements.password.value;t.length<3||t.length>20||!n.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)||!r.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/)||n&&r.length>=6&&(m.classList.remove("signed-out"),(0,o.a8)(g,n,r,t).then((async()=>{this.updateUserName(t),localStorage.setItem("userName",t),document.querySelector(".backdrop-form").classList.add("backdrop-form--is-hidden"),e.target.reset(),document.body.classList.remove("body-lock")})).catch((e=>{"auth/email-already-in-use"===e.code?c.notification.error("This email is taken by another user. Please use another email","Email is already in use"):c.notification.error([e.code,e.message],"Sorry, unexpected error occured"),m.classList.add("signed-out")})).finally((()=>{p.reset(),f.classList.add("visually-hidden")})))};signIn=e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),n=e.target.elements.password.value.trim();""!==t&&""!==n&&t&&n.length>=6&&(m.classList.remove("signed-out"),(0,o.a9)(g,t,n).then((t=>{const n=t.user;localStorage.setItem("userName",n.displayName),document.querySelector(".backdrop-form").classList.add("backdrop-form--is-hidden"),e.target.reset(),document.body.classList.remove("body-lock")})).catch((e=>{"auth/user-not-found"===e.code||"auth/wrong-password"===e.code?c.notification.error("Your login credentials don't match an account in our system ","Wrong email or password"):"auth/too-many-requests"===e.code?c.notification.error("Too many unsuccessful tries. You can try to sign in later. ","Too many requests"):c.notification.error([e.code,e.message],"Sorry, unexpected error occured")})).finally((()=>{h.reset(),f.classList.add("visually-hidden")})))};signOutUser=()=>{document.body.classList.remove("is-logged"),(0,o.B)(g).then((()=>{document.querySelector(".js-user").classList.remove("user--is-active-btns-box"),localStorage.removeItem("userName"),localStorage.removeItem("userShoppingListCounter")})).catch((e=>{document.body.classList.add("is-logged"),c.notification.error([e.code,e.message],"Sorry, unexpected error occured")})).finally((()=>{}))};authSentry=()=>{(0,o.x)(g,(e=>{if(e){localStorage.setItem("userName",e.displayName),_=!0,a.default.getUserData().then((e=>{e?(r.default.set(e),localStorage.setItem("userData",JSON.stringify(e)),localStorage.setItem("userShoppingListCounter",e.shoppingList.length),v&&(v.style.display="none"),(0,d.initialShoppingList)(),(0,i.initialCartCounterBackup)()):r.default.set(l.INITIAL_STATE_VALUE)}));document.querySelectorAll(".user__name").forEach((t=>{t.textContent=`${e.displayName}`})),document.body.classList.contains("is-logged")||document.body.classList.add("is-logged")}else _=!1,localStorage.removeItem("userData"),localStorage.getItem("globalState")?r.default.set(JSON.parse(localStorage.getItem("globalState"))):(r.default.set(l.INITIAL_STATE_VALUE),r.default.writeToLocalStorage()),m.classList.add("signed-out"),(0,i.closingCartCounter)()}))};isAuthenticated=()=>new Promise((e=>{(0,o.x)(g,(t=>{e(!!t)}))}));getCurrentUserId=()=>{const e=g.currentUser;if(null!==e)return e.uid};updateUserName=e=>{(0,o.ai)(g.currentUser,{displayName:e}).then((()=>{this.updateUserInterface(e)})).catch((e=>{c.notification.error([e.code,e.message],"Sorry, unexpected error occured")}))};updateUserEmail=e=>{(0,o.aj)(g.currentUser,e).then((()=>{console.log("email updated"),console.log(`Your new email is: ${e}`)})).catch((e=>{c.notification.error([e.code,e.message],"Sorry, unexpected error occured")}))};updateUserPassword=e=>{(0,o.ak)(g.currentUser,e).then((()=>{console.log("password updated"),console.log(`Your new password is: ${e}`)})).catch((e=>{c.notification.error([e.code,e.message],"Sorry, unexpected error occured")}))};getUserProfile=()=>{const e=g.currentUser;if(null!==e)return e};updateUserInterface=e=>{document.querySelectorAll(".user__name").forEach((t=>{t.textContent=`${e}`}))};getUserStatus=()=>_}})),s.register("lRSMh",(function(t,n){e(t.exports,"default",(function(){return c}));var r=s("fGeq0"),i=s("eH1tb"),o=s("bc0hQ"),a=s("gBQDP");let l=JSON.parse(JSON.stringify(o.INITIAL_STATE_VALUE));var c=Object.freeze(new class{get(){return JSON.parse(JSON.stringify(l))}set(e){l=JSON.parse(JSON.stringify(e)),this.saveData()}shoppingList(){return[...l.shoppingList]}theme(){return l.theme}setShoppingList(e){l.shoppingList=[...e],this.saveData(),(0,a.cartCounter)()}setTheme(e){l.theme=e,this.saveData()}writeToLocalStorage(){localStorage.setItem("globalState",JSON.stringify(l))}async saveData(){await i.default.isAuthenticated()?(r.default.writeUserData(),localStorage.setItem("userData",JSON.stringify(this.get()))):this.writeToLocalStorage()}})})),s.register("fGeq0",(function(t,n){e(t.exports,"default",(function(){return d})),s("cokon");var r=s("eA2L7"),i=s("lRSMh"),o=s("eH1tb"),a=s("bc0hQ"),l=s("1R002"),c=s("bRxOZ");const u=(0,r.getDatabase)(c.app);var d=new class{writeUserData(){const e=o.default.getCurrentUserId(),t=i.default.get();(0,r.set)((0,r.ref)(u,"users/"+e),t)}async getUserData(){const e=o.default.getCurrentUserId();return await(0,r.get)((0,r.ref)(u,"users/"+e)).then((e=>{if(e.exists()){return{...a.INITIAL_STATE_VALUE,...e.val()}}})).catch((e=>{l.notification.error([e.code,e.message],"Sorry, unexpected error occured")}))}}})),s.register("cokon",(function(t,n){e(t.exports,"get",(function(){return s("eA2L7").get})),e(t.exports,"getDatabase",(function(){return s("eA2L7").getDatabase})),e(t.exports,"ref",(function(){return s("eA2L7").ref})),e(t.exports,"set",(function(){return s("eA2L7").set})),s("eA2L7")})),s.register("eA2L7",(function(t,n){e(t.exports,"ref",(function(){return xi})),e(t.exports,"set",(function(){return Ii})),e(t.exports,"get",(function(){return ki})),e(t.exports,"getDatabase",(function(){return Di}));var r=s("MjY8E"),i=s("6ExWU"),o=s("2xDiJ"),a=s("kZfxc"),l=s("6qd2L");const c="@firebase/database",u="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(e){}return new p},g=f("localStorage"),m=f("sessionStorage"),v=new(0,a.Logger)("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,o.stringToByteArray)(e),n=new(0,o.Sha1);n.update(t);const r=n.digest();return o.base64.encodeByteArray(r)},w=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=w.apply(null,r):t+="object"==typeof r?(0,o.stringify)(r):r,t+=" "}return t};let b=null,T=!0;const C=function(e,t){(0,o.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(v.logLevel=a.LogLevel.VERBOSE,b=v.log.bind(v),t&&m.set("logging_enabled",!0)):"function"==typeof e?b=e:(b=null,m.remove("logging_enabled"))},E=function(...e){if(!0===T&&(T=!1,null===b&&!0===m.get("logging_enabled")&&C(!0)),b){const t=w.apply(null,e);b(t)}},x=function(e){return function(...t){E(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+w(...e);v.error(t)},I=function(...e){const t=`FIREBASE FATAL ERROR: ${w(...e)}`;throw v.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+w(...e);v.warn(t)},P=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},N="[MIN_NAME]",O="[MAX_NAME]",L=function(e,t){if(e===t)return 0;if(e===N||t===O)return-1;if(t===N||e===O)return 1;{const n=H(e),r=H(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},R=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.stringify)(t))},D=function(e){if("object"!=typeof e||null===e)return(0,o.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.stringify)(t[r]),n+=":",n+=D(e[t[r]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){(0,o.assert)(!P(e),"Invalid JSON number");const t=1023;let n,r,i,s,a;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const l=[];for(a=52;a;a-=1)l.push(i%2?1:0),i=Math.floor(i/2);for(a=11;a;a-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(n?1:0),l.reverse();const c=l.join("");let u="";for(a=0;a<64;a+=8){let e=parseInt(c.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()};const q=new RegExp("^-?(0*)\\d{1,10}$"),H=function(e){if(q.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},U=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw k("Exception was thrown by user callback.",t),e}),Math.floor(0))}},B=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class V{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}V.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G="5",$=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Y="ac",K="websocket",J="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=g.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&g.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Q(e,t,n){let r;if((0,o.assert)("string"==typeof t,"typeof type must == string"),(0,o.assert)("object"==typeof n,"typeof params must == object"),t===K)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==J)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return F(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.deepCopy)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={},te={};function ne(e){const t=e.toString();return ee[t]||(ee[t]=new Z),ee[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&U((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="start";class se{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=x(e),this.stats_=ne(t),this.urlFn=e=>(this.appCheckToken&&(e[Y]=this.appCheckToken),Q(t,J,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new re(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,o.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new oe(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ie)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ie]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=G,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Y]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){se.forceAllow_=!0}static forceDisallow(){se.forceDisallow_=!0}static isAvailable(){return!(0,o.isNodeSdk)()&&(!!se.forceAllow_||!(se.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.base64Encode)(t),r=M(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class oe{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=oe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){E("frame writing exception"),e.stack&&E(e.stack),E(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){(0,o.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ae=null;"undefined"!=typeof MozWebSocket?ae=MozWebSocket:"undefined"!=typeof WebSocket&&(ae=WebSocket);class le{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=x(this.connId),this.stats_=ne(t),this.connURL=le.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s.v=G,!(0,o.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s[Y]=r),i&&(s.p=i),Q(e,K,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,g.set("previous_websocket_failure",!0);try{let e;if((0,o.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${G}/${d}/${l.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new ae(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){le.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ae&&!le.forceDisallow_}static previouslyFailed(){return g.isInMemoryStorage||!0===g.get("previous_websocket_failure")}markConnectionHealthy(){g.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}le.responsesRequiredToBeHealthy=2,le.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[se,le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=le&&le.isAvailable();let n=t&&!le.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[le];else{const e=this.transports_=[];for(const t of ce.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ce.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ce.globalTransportInitialized_=!1;class ue{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=x("c:"+this.id+":"),this.transportManager_=new ce(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=B((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=R("t",e),n=R("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=R("t",e),n=R("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=R("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?S("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),G!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),B((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):B((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(g.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){(0,o.assert)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends he{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,o.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new pe}getInitialEvent(e){return(0,o.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=32,ge=768;class me{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ve(){return new me("")}function _e(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ye(e){return e.pieces_.length-e.pieceNum_}function we(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new me(e.pieces_,t)}function be(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Te(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ce(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new me(t,0)}function Ee(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof me)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new me(n,0)}function xe(e){return e.pieceNum_>=e.pieces_.length}function Se(e,t){const n=_e(e),r=_e(t);if(null===n)return t;if(n===r)return Se(we(e),we(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ie(e,t){if(ye(e)!==ye(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function ke(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ye(e)>ye(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Pe{constructor(e,t){this.errorPrefix_=t,this.parts_=Te(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,o.stringLength)(this.parts_[e]);Ne(this)}}function Ne(e){if(e.byteLength_>ge)throw new Error(e.errorPrefix_+"has a key path longer than "+ge+" bytes ("+e.byteLength_+").");if(e.parts_.length>fe)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fe+") or object contains a cycle "+Oe(e))}function Oe(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends he{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Le}getInitialEvent(e){return(0,o.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1e3;class Re extends de{constructor(e,t,n,r,i,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Re.nextPersistentConnectionId_++,this.log_=x("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ae,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,o.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Le.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&pe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,o.stringify)(i)),(0,o.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new(0,o.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.assert)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;Re.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,o.contains)(e,"w")){const n=(0,o.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,o.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+(0,o.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ae),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Re.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,n())},c=function(e){(0,o.assert)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=l&&l.token,a=new ue(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&k(e),l())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>D(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new me(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+d.replace(/\./g,"-")]=1,(0,o.isMobileCordova)()?e["framework.cordova"]=1:(0,o.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pe.getInstance().currentlyOnline();return(0,o.isEmpty)(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0,Re.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new De(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new De(N,e),r=new De(N,t);return 0!==this.compare(n,r)}minPost(){return De.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe;class je extends Me{static get __EMPTY_NODE(){return Fe}static set __EMPTY_NODE(e){Fe=e}compare(e,t){return L(e.name,t.name)}isDefinedOn(e){throw(0,o.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return De.MIN}maxPost(){return new De(O,Fe)}makePost(e,t){return(0,o.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new De(e,Fe)}toString(){return".key"}}const qe=new je;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ue.RED,this.left=null!=r?r:Be.EMPTY_NODE,this.right=null!=i?i:Be.EMPTY_NODE}copy(e,t,n,r,i){return new Ue(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Be.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0,Ue.BLACK=!1;class Be{constructor(e,t=Be.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Be(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new He(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new He(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new He(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new He(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e,t){return L(e.name,t.name)}function ze(e,t){return L(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve;Be.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ue(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ge=function(e){return"number"==typeof e?"number:"+j(e):"string:"+e},$e=function(e){if(e.isLeafNode()){const t=e.val();(0,o.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,o.contains)(t,".sv"),"Priority must be a string or number.")}else(0,o.assert)(e===Ve||e.isEmpty(),"priority of unexpected type.");(0,o.assert)(e===Ve||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ye,Ke,Je;class Xe{constructor(e,t=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),$e(this.priorityNode_)}static set __childrenNodeConstructor(e){Ye=e}static get __childrenNodeConstructor(){return Ye}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return xe(e)?this:".priority"===_e(e)?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=_e(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.assert)(".priority"!==n||1===ye(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ge(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:((0,o.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Xe.VALUE_TYPE_ORDER.indexOf(t),i=Xe.VALUE_TYPE_ORDER.indexOf(n);return(0,o.assert)(r>=0,"Unknown leaf type: "+t),(0,o.assert)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Qe=new class extends Me{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?L(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return De.MIN}maxPost(){return new De(O,new Xe("[PRIORITY-POST]",Je))}makePost(e,t){const n=Ke(e);return new De(t,new Xe("[PRIORITY-POST]",n))}toString(){return".priority"}},Ze=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ze,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const tt=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ue(a,o.node,Ue.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new Ue(a,o.node,Ue.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],d=n?n(u):u;l(new Ue(d,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ue.BLACK):(a(r,Ue.BLACK),a(r,Ue.RED))}return s}(new et(e.length));return new Be(r||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt;const rt={};class it{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.assert)(rt&&Qe,"ChildrenNode.ts has not been loaded"),nt=nt||new it({".priority":rt},{".priority":Qe}),nt}get(e){const t=(0,o.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Be?t:null}hasIndex(e){return(0,o.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.assert)(e!==qe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(De.Wrap);let s,a=i.getNext();for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?tt(n,e.getCompare()):rt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=s,new it(u,c)}addToIndexes(e,t){const n=(0,o.map)(this.indexes_,((n,r)=>{const i=(0,o.safeGet)(this.indexSet_,r);if((0,o.assert)(i,"Missing index implementation for "+r),n===rt){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(De.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),tt(n,i.getCompare())}return rt}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new De(e.name,r))),i.insert(e,e.node)}}));return new it(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.map)(this.indexes_,(n=>{if(n===rt)return n;{const r=t.get(e.name);return r?n.remove(new De(e.name,r)):n}}));return new it(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st;class ot{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&$e(this.priorityNode_),this.children_.isEmpty()&&(0,o.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return st||(st=new ot(new Be(ze),null,it.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||st}updatePriority(e){return this.children_.isEmpty()?this:new ot(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?st:t}}getChild(e){const t=_e(e);return null===t?this:this.getImmediateChild(t).getChild(we(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new De(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?st:this.priorityNode_;return new ot(r,s,i)}}updateChild(e,t){const n=_e(e);if(null===n)return t;{(0,o.assert)(".priority"!==_e(e)||1===ye(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(we(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Qe,((s,o)=>{t[s]=o.val(e),n++,i&&ot.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ge(this.getPriority().val())+":"),this.forEachChild(Qe,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new De(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new De(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new De(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,De.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,De.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===at?-1:0}withIndex(e){if(e===qe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ot(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Qe),n=t.getIterator(Qe);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===qe?null:this.indexMap_.get(e.toString())}}ot.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const at=new class extends ot{constructor(){super(new Be(ze),ot.EMPTY_NODE,it.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ot.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(De,{MIN:{value:new De(N,ot.EMPTY_NODE)},MAX:{value:new De(O,at)}}),je.__EMPTY_NODE=ot.EMPTY_NODE,Xe.__childrenNodeConstructor=ot,Ve=at,function(e){Je=e}(at);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt=!0;function ct(e,t=null){if(null===e)return ot.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Xe(e,ct(t))}if(e instanceof Array||!lt){let n=ot.EMPTY_NODE;return F(e,((t,r)=>{if((0,o.contains)(e,t)&&"."!==t.substring(0,1)){const e=ct(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ct(t))}{const n=[];let r=!1;if(F(e,((e,t)=>{if("."!==e.substring(0,1)){const i=ct(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new De(e,i)))}})),0===n.length)return ot.EMPTY_NODE;const i=tt(n,We,(e=>e.name),ze);if(r){const e=tt(n,Qe.getCompare());return new ot(i,ct(t),new it({".priority":e},{".priority":Qe}))}return new ot(i,ct(t),it.Default)}}!function(e){Ke=e}(ct);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut extends Me{constructor(e){super(),this.indexPath_=e,(0,o.assert)(!xe(e)&&".priority"!==_e(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?L(e.name,t.name):i}makePost(e,t){const n=ct(e),r=ot.EMPTY_NODE.updateChild(this.indexPath_,n);return new De(t,r)}maxPost(){const e=ot.EMPTY_NODE.updateChild(this.indexPath_,at);return new De(O,e)}toString(){return Te(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new class extends Me{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?L(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,t){const n=ct(e);return new De(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return{type:"value",snapshotNode:e}}function pt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ft(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function gt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){(0,o.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(ft(t,a)):(0,o.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(pt(t,n)):s.trackChildChange(gt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Qe,((e,r)=>{t.hasChild(e)||n.trackChildChange(ft(e,r))})),t.isLeafNode()||t.forEachChild(Qe,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(gt(t,r,i))}else n.trackChildChange(pt(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ot.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.indexedFilter_=new mt(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vt.getStartPost_(e),this.endPost_=vt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new De(t,n))||(n=ot.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ot.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(ot.EMPTY_NODE);const i=this;return t.forEachChild(Qe,((e,t)=>{i.matches(new De(e,t))||(r=r.updateImmediateChild(e,ot.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new vt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new De(t,n))||(n=ot.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=ot.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=ot.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(ot.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,ot.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.assert)(a.numChildren()===this.limit_,"");const l=new De(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=r.getChildAfterChild(this.index_,o,this.reverse_);const d=null==o?1:s(o,l);if(u&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(gt(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(ft(t,e));const n=a.updateImmediateChild(t,ot.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=i&&i.trackChildChange(pt(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(c,l)>=0?(null!=i&&(i.trackChildChange(ft(c.name,c.node)),i.trackChildChange(pt(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,ot.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qe}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:O}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qe}copy(){const e=new yt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wt(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Qe?n="$priority":e.index_===dt?n="$value":e.index_===qe?n="$key":((0,o.assert)(e.index_ instanceof ut,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,o.stringify)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.stringify)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.stringify)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function bt(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Qe&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends de{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=x("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Tt.getListenId_(e,n),a={};this.listens_[s]=a;const l=wt(e._queryParams);this.restRequest_(i+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(i,l,!1,n),(0,o.safeGet)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Tt.getListenId_(e,t);delete this.listens_[n]}get(e){const t=wt(e._queryParams),n=e._path.toString(),r=new(0,o.Deferred);return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.querystring)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.jsonEval)(a.responseText)}catch(e){k("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.rootNode_=ot.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return{value:null,children:new Map}}function xt(e,t,n){if(xe(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=_e(t);e.children.has(r)||e.children.set(r,Et());xt(e.children.get(r),t=we(t),n)}}function St(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{St(r,new me(t.toString()+"/"+e),n)}))}class It{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new It(e);const n=1e4+2e4*Math.random();B(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,((e,r)=>{r>0&&(0,o.contains)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),B(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt,Nt;function Ot(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Nt=Pt||(Pt={}))[Nt.OVERWRITE=0]="OVERWRITE",Nt[Nt.MERGE=1]="MERGE",Nt[Nt.ACK_USER_WRITE=2]="ACK_USER_WRITE",Nt[Nt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Lt{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Pt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(xe(this.path)){if(null!=this.affectedTree.value)return(0,o.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new me(e));return new Lt(ve(),t,this.revert)}}return(0,o.assert)(_e(this.path)===e,"operationForChild called for unrelated child."),new Lt(we(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){this.source=e,this.path=t,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return xe(this.path)?new At(this.source,ve()):new At(this.source,we(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Pt.OVERWRITE}operationForChild(e){return xe(this.path)?new Rt(this.source,ve(),this.snap.getImmediateChild(e)):new Rt(this.source,we(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Pt.MERGE}operationForChild(e){if(xe(this.path)){const t=this.children.subtree(new me(e));return t.isEmpty()?null:t.value?new Rt(this.source,ve(),t.value):new Dt(this.source,ve(),t)}return(0,o.assert)(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Dt(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(xe(e))return this.isFullyInitialized()&&!this.filtered_;const t=_e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jt(e,t,n,r,i,s){const a=r.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.assertionError)("Should only compare child_ events.");const r=new De(t.childName,t.snapshotNode),i=new De(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function qt(e,t){return{eventCache:e,serverCache:t}}function Ht(e,t,n,r){return qt(new Mt(t,n,r),e.serverCache)}function Ut(e,t,n,r){return qt(e.eventCache,new Mt(t,n,r))}function Bt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Wt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt;class Vt{constructor(e,t=(()=>(zt||(zt=new Be(A)),zt))()){this.value=e,this.children=t}static fromObject(e){let t=new Vt(null);return F(e,((e,n)=>{t=t.set(new me(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ve(),value:this.value};if(xe(e))return null;{const n=_e(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(we(e),t);if(null!=i){return{path:Ee(new me(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(xe(e))return this;{const t=_e(e),n=this.children.get(t);return null!==n?n.subtree(we(e)):new Vt(null)}}set(e,t){if(xe(e))return new Vt(t,this.children);{const n=_e(e),r=(this.children.get(n)||new Vt(null)).set(we(e),t),i=this.children.insert(n,r);return new Vt(this.value,i)}}remove(e){if(xe(e))return this.children.isEmpty()?new Vt(null):new Vt(null,this.children);{const t=_e(e),n=this.children.get(t);if(n){const r=n.remove(we(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Vt(null):new Vt(this.value,i)}return this}}get(e){if(xe(e))return this.value;{const t=_e(e),n=this.children.get(t);return n?n.get(we(e)):null}}setTree(e,t){if(xe(e))return t;{const n=_e(e),r=(this.children.get(n)||new Vt(null)).setTree(we(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Vt(this.value,i)}}fold(e){return this.fold_(ve(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Ee(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ve(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(xe(e))return null;{const r=_e(e),i=this.children.get(r);return i?i.findOnPath_(we(e),Ee(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ve(),t)}foreachOnPath_(e,t,n){if(xe(e))return this;{this.value&&n(t,this.value);const r=_e(e),i=this.children.get(r);return i?i.foreachOnPath_(we(e),Ee(t,r),n):new Vt(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Ee(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new Vt(null))}}function $t(e,t,n){if(xe(t))return new Gt(new Vt(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=Se(i,t);return s=s.updateChild(o,n),new Gt(e.writeTree_.set(i,s))}{const r=new Vt(n),i=e.writeTree_.setTree(t,r);return new Gt(i)}}}function Yt(e,t,n){let r=e;return F(n,((e,n)=>{r=$t(r,Ee(t,e),n)})),r}function Kt(e,t){if(xe(t))return Gt.empty();{const n=e.writeTree_.setTree(t,new Vt(null));return new Gt(n)}}function Jt(e,t){return null!=Xt(e,t)}function Xt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Se(n.path,t)):null}function Qt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Qe,((e,n)=>{t.push(new De(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new De(e,n.value))})),t}function Zt(e,t){if(xe(t))return e;{const n=Xt(e,t);return new Gt(null!=n?new Vt(n):e.writeTree_.subtree(t))}}function en(e){return e.writeTree_.isEmpty()}function tn(e,t){return nn(ve(),e.writeTree_,t)}function nn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,o.assert)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=nn(Ee(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ee(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t){return vn(t,e)}function sn(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.assert)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;for(;i&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&on(t,r.path)?i=!1:ke(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return function(e){e.visibleWrites=ln(e.allWrites,an,ve()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Kt(e.visibleWrites,r.path);else{F(r.children,(t=>{e.visibleWrites=Kt(e.visibleWrites,Ee(r.path,t))}))}return!0}return!1}function on(e,t){if(e.snap)return ke(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ke(Ee(e.path,n),t))return!0;return!1}function an(e){return e.visible}function ln(e,t,n){let r=Gt.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)ke(n,e)?(t=Se(n,e),r=$t(r,t,s.snap)):ke(e,n)&&(t=Se(e,n),r=$t(r,ve(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.assertionError)("WriteRecord should have .snap or .children");if(ke(n,e))t=Se(n,e),r=Yt(r,t,s.children);else if(ke(e,n))if(t=Se(e,n),xe(t))r=Yt(r,ve(),s.children);else{const e=(0,o.safeGet)(s.children,_e(t));if(e){const n=e.getChild(we(t));r=$t(r,ve(),n)}}}}}return r}function cn(e,t,n,r,i){if(r||i){const s=Zt(e.visibleWrites,t);if(!i&&en(s))return n;if(i||null!=n||Jt(s,ve())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(ke(e.path,t)||ke(t,e.path))};return tn(ln(e.allWrites,s,t),n||ot.EMPTY_NODE)}return null}{const r=Xt(e.visibleWrites,t);if(null!=r)return r;{const r=Zt(e.visibleWrites,t);if(en(r))return n;if(null!=n||Jt(r,ve())){return tn(r,n||ot.EMPTY_NODE)}return null}}}function un(e,t,n,r){return cn(e.writeTree,e.treePath,t,n,r)}function dn(e,t){return function(e,t,n){let r=ot.EMPTY_NODE;const i=Xt(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Qe,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Zt(e.visibleWrites,t);return n.forEachChild(Qe,((e,t)=>{const n=tn(Zt(i,new me(e)),t);r=r.updateImmediateChild(e,n)})),Qt(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Qt(Zt(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function hn(e,t,n,r){return function(e,t,n,r,i){(0,o.assert)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(t,n);if(Jt(e.visibleWrites,s))return null;{const t=Zt(e.visibleWrites,s);return en(t)?i.getChild(n):tn(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function pn(e,t){return function(e,t){return Xt(e.visibleWrites,t)}(e.writeTree,Ee(e.treePath,t))}function fn(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=Zt(e.visibleWrites,t),c=Xt(l,ve());if(null!=c)a=c;else{if(null==n)return[];a=tn(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function gn(e,t,n){return function(e,t,n,r){const i=Ee(t,n),s=Xt(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return tn(Zt(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function mn(e,t){return vn(Ee(e.treePath,t),e.writeTree)}function vn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,gt(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,ft(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,pt(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,o.assertionError)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,gt(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class wn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Mt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Wt(this.viewCache_),i=fn(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t,n,r,i){const s=new _n;let a,l;if(n.type===Pt.OVERWRITE){const c=n;c.source.fromUser?a=En(e,t,c.path,c.snap,r,i,s):((0,o.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!xe(c.path),a=Cn(e,t,c.path,c.snap,r,i,l,s))}else if(n.type===Pt.MERGE){const c=n;c.source.fromUser?a=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=Ee(n,r);xn(t,_e(c))&&(a=En(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=Ee(n,r);xn(t,_e(c))||(a=En(e,a,c,l,i,s,o))})),a}(e,t,c.path,c.children,r,i,s):((0,o.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=In(e,t,c.path,c.children,r,i,l,s))}else if(n.type===Pt.ACK_USER_WRITE){const l=n;a=l.revert?function(e,t,n,r,i,s){let a;if(null!=pn(r,n))return t;{const l=new wn(r,t,i),c=t.eventCache.getNode();let u;if(xe(n)||".priority"===_e(n)){let n;if(t.serverCache.isFullyInitialized())n=un(r,Wt(t));else{const e=t.serverCache.getNode();(0,o.assert)(e instanceof ot,"serverChildren would be complete if leaf node"),n=dn(r,e)}u=e.filter.updateFullNode(c,n,s)}else{const i=_e(n);let o=gn(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=c.getImmediateChild(i)),u=null!=o?e.filter.updateChild(c,i,o,we(n),l,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,ot.EMPTY_NODE,we(n),l,s):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=un(r,Wt(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=pn(r,ve()),Ht(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=pn(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(xe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cn(e,t,n,l.getNode().getChild(n),i,s,a,o);if(xe(n)){let r=new Vt(null);return l.getNode().forEachChild(qe,((e,t)=>{r=r.set(new me(e),t)})),In(e,t,n,r,i,s,a,o)}return t}{let c=new Vt(null);return r.foreach(((e,t)=>{const r=Ee(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),In(e,t,n,c,i,s,a,o)}}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Pt.LISTEN_COMPLETE)throw(0,o.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,r,i){const s=t.serverCache,o=Ut(t,s.getNode(),s.isFullyInitialized()||xe(n),s.isFiltered());return Tn(e,o,n,r,yn,i)}(e,t,n.path,r,s)}const c=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Bt(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ht(Bt(t)))}}(t,a,c),{viewCache:a,changes:c}}function Tn(e,t,n,r,i,s){const a=t.eventCache;if(null!=pn(r,n))return t;{let l,c;if(xe(n))if((0,o.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Wt(t),i=dn(r,n instanceof ot?n:ot.EMPTY_NODE);l=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=un(r,Wt(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=_e(n);if(".priority"===u){(0,o.assert)(1===ye(n),"Can't have a priority with additional path components");const i=a.getNode();c=t.serverCache.getNode();const s=hn(r,n,i,c);l=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=we(n);let d;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=hn(r,n,a.getNode(),c);d=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else d=gn(r,u,t.serverCache);l=null!=d?e.filter.updateChild(a.getNode(),u,d,o,i,s):a.getNode()}}return Ht(t,l,a.isFullyInitialized()||xe(n),e.filter.filtersNodes())}}function Cn(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(xe(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=_e(n);if(!l.isCompleteForPath(n)&&ye(n)>1)return t;const i=we(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,yn,null)}const d=Ut(t,c,l.isFullyInitialized()||xe(n),u.filtersNodes());return Tn(e,d,n,i,new wn(i,d,s),a)}function En(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new wn(i,t,s);if(xe(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Ht(t,c,!0,e.filter.filtersNodes());else{const i=_e(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Ht(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=we(n),c=a.getNode().getImmediateChild(i);let d;if(xe(s))d=r;else{const e=u.getCompleteChild(i);d=null!=e?".priority"===be(s)&&e.getChild(Ce(s)).isEmpty()?e:e.updateChild(s,r):ot.EMPTY_NODE}if(c.equals(d))l=t;else{l=Ht(t,e.filter.updateChild(a.getNode(),i,d,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function xn(e,t){return e.eventCache.isCompleteForChild(t)}function Sn(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function In(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=xe(n)?r:new Vt(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=Sn(0,t.serverCache.getNode().getImmediateChild(n),r);c=Cn(e,c,new me(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=Sn(0,t.serverCache.getNode().getImmediateChild(n),r);c=Cn(e,c,new me(n),l,i,s,o,a)}})),c}class kn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new mt(n.getIndex()),i=(s=n).loadsAllData()?new mt(s.getIndex()):s.hasLimit()?new _t(s):new vt(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(ot.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(ot.EMPTY_NODE,a.getNode(),null),u=new Mt(l,o.isFullyInitialized(),r.filtersNodes()),d=new Mt(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=qt(d,u),this.eventGenerator_=new Ft(this.query_)}get query(){return this.query_}}function Pn(e,t){const n=Wt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!xe(t)&&!n.getImmediateChild(_e(t)).isEmpty())?n.getChild(t):null}function Nn(e){return 0===e.eventRegistrations_.length}function On(e,t,n){const r=[];if(n){(0,o.assert)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Ln(e,t,n,r){t.type===Pt.MERGE&&null!==t.source.queryId&&((0,o.assert)(Wt(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.assert)(Bt(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=bn(e.processor_,i,t,n,r);var a,l;return a=e.processor_,l=s.viewCache,(0,o.assert)(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,o.assert)(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,o.assert)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,An(e,s.changes,s.viewCache.eventCache.getNode(),null)}function An(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),jt(e,i,"child_removed",t,r,n),jt(e,i,"child_added",t,r,n),jt(e,i,"child_moved",s,r,n),jt(e,i,"child_changed",t,r,n),jt(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn,Dn;class Mn{constructor(){this.views=new Map}}function Fn(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,o.assert)(null!=s,"SyncTree gave us an op for an invalid query."),Ln(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Ln(s,t,n,r));return i}}function jn(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=un(n,i?r:null),s=!1;e?s=!0:r instanceof ot?(e=dn(n,r),s=!1):(e=ot.EMPTY_NODE,s=!1);const o=qt(new Mt(e,s,!1),new Mt(r,i,!1));return new kn(t,o)}return o}function qn(e,t,n,r,i,s){const o=jn(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Qe,((e,t)=>{r.push(pt(e,t))}));return n.isFullyInitialized()&&r.push(ht(n.getNode())),An(e,r,n.getNode(),t)}(o,n)}function Hn(e,t,n,r){const i=t._queryIdentifier,s=[];let a=[];const l=Vn(e);if("default"===i)for(const[t,i]of e.views.entries())a=a.concat(On(i,n,r)),Nn(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(a=a.concat(On(t,n,r)),Nn(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return l&&!Vn(e)&&s.push(new((0,o.assert)(Rn,"Reference.ts has not been loaded"),Rn)(t._repo,t._path)),{removed:s,events:a}}function Un(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Bn(e,t){let n=null;for(const r of e.views.values())n=n||Pn(r,t);return n}function Wn(e,t){if(t._queryParams.loadsAllData())return Gn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function zn(e,t){return null!=Wn(e,t)}function Vn(e){return null!=Gn(e)}function Gn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n=1;class Yn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Vt(null),this.pendingWriteTree_={visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kn(e,t,n,r,i){return function(e,t,n,r,i){(0,o.assert)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=$t(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?rr(e,new Rt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Jn(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(sn(e.pendingWriteTree_,t)){let t=new Vt(null);return null!=r.snap?t=t.set(ve(),!0):F(r.children,(e=>{t=t.set(new me(e),!0)})),rr(e,new Lt(r.path,t,n))}return[]}function Xn(e,t,n){return rr(e,new Rt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Qn(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||zn(o,t))){const l=Hn(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(s,((e,t)=>Vn(t)));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Vn(t)){return[Gn(t)]}{let e=[];return t&&(e=Un(t)),F(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=or(e,r);e.listenProvider_.startListening(hr(i),ar(e,i),s.hashFn,s.onComplete)}}}if(!i&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(hr(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(lr(t));e.listenProvider_.stopListening(hr(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=lr(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Zn(e,t,n,r){const i=cr(e,r);if(null!=i){const r=ur(i),s=r.path,o=r.queryId,a=Se(s,t);return dr(e,s,new Rt(Ot(o),a,n))}return[]}function er(e,t,n,r=!1){const i=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Se(e,i);s=s||Bn(t,n),a=a||Vn(t)}));let l,c=e.syncPointTree_.get(i);if(c?(a=a||Vn(c),s=s||Bn(c,ve())):(c=new Mn,e.syncPointTree_=e.syncPointTree_.set(i,c)),null!=s)l=!0;else{l=!1,s=ot.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=Bn(t,ve());n&&(s=s.updateImmediateChild(e,n))}))}const u=zn(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=lr(t);(0,o.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=$n++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let d=qn(c,t,n,rn(e.pendingWriteTree_,i),s,l);if(!u&&!a&&!r){const n=Wn(c,t);d=d.concat(function(e,t,n){const r=t._path,i=ar(e,t),s=or(e,n),a=e.listenProvider_.startListening(hr(t),i,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(r);if(i)(0,o.assert)(!Vn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!xe(e)&&t&&Vn(t))return[Gn(t).query];{let e=[];return t&&(e=e.concat(Un(t).map((e=>e.query)))),F(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(hr(r),ar(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return d}function tr(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Bn(n,Se(e,t));if(r)return r}));return cn(r,t,i,n,!0)}function nr(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=Se(e,n);r=r||Bn(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Bn(i,ve()):(i=new Mn,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new Mt(r,!0,!1):null;return function(e){return Bt(e.viewCache_)}(jn(i,t,rn(e.pendingWriteTree_,t._path),s?o.getNode():ot.EMPTY_NODE,s))}function rr(e,t){return ir(t,e.syncPointTree_,null,rn(e.pendingWriteTree_,ve()))}function ir(e,t,n,r){if(xe(e.path))return sr(e,t,n,r);{const i=t.get(ve());null==n&&null!=i&&(n=Bn(i,ve()));let s=[];const o=_e(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=mn(r,o);s=s.concat(ir(a,l,e,t))}return i&&(s=s.concat(Fn(i,e,r,n))),s}}function sr(e,t,n,r){const i=t.get(ve());null==n&&null!=i&&(n=Bn(i,ve()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=mn(r,t),l=e.operationForChild(t);l&&(s=s.concat(sr(l,i,o,a)))})),i&&(s=s.concat(Fn(i,e,r,n))),s}function or(e,t){const n=t.query,r=ar(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ot.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=cr(e,n);if(r){const n=ur(r),i=n.path,s=n.queryId,o=Se(i,t);return dr(e,i,new At(Ot(s),o))}return[]}(e,n._path,r):function(e,t){return rr(e,new At({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Qn(e,n,null,r)}}}}function ar(e,t){const n=lr(t);return e.queryToTagMap.get(n)}function lr(e){return e._path.toString()+"$"+e._queryIdentifier}function cr(e,t){return e.tagToQueryMap.get(t)}function ur(e){const t=e.indexOf("$");return(0,o.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new me(e.substr(0,t))}}function dr(e,t,n){const r=e.syncPointTree_.get(t);(0,o.assert)(r,"Missing sync point for query tag that we're tracking");return Fn(r,n,rn(e.pendingWriteTree_,t),null)}function hr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,o.assert)(Dn,"Reference.ts has not been loaded"),Dn)(e._repo,e._path):e}class pr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new pr(t)}node(){return this.node_}}class fr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ee(this.path_,e);return new fr(this.syncTree_,t)}node(){return tr(this.syncTree_,this.path_)}}const gr=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},mr=function(e,t,n){return e&&"object"==typeof e?((0,o.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?vr(e[".sv"],t,n):"object"==typeof e[".sv"]?_r(e[".sv"],t):void(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},vr=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,o.assert)(!1,"Unexpected server value: "+e)},_r=function(e,t,n){e.hasOwnProperty("increment")||(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&(0,o.assert)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,o.assert)(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},yr=function(e,t,n,r){return br(t,new fr(n,e),r)},wr=function(e,t,n){return br(e,new pr(t),n)};function br(e,t,n){const r=e.getPriority().val(),i=mr(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=mr(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Xe(s,ct(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Xe(i))),r.forEachChild(Qe,((e,r)=>{const i=br(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Cr(e,t){let n=t instanceof me?t:new me(t),r=e,i=_e(n);for(;null!==i;){const e=(0,o.safeGet)(r.node.children,i)||{children:{},childCount:0};r=new Tr(i,r,e),n=we(n),i=_e(n)}return r}function Er(e){return e.node.value}function xr(e,t){e.node.value=t,Nr(e)}function Sr(e){return e.node.childCount>0}function Ir(e,t){F(e.node.children,((n,r)=>{t(new Tr(n,e,r))}))}function kr(e,t,n,r){n&&!r&&t(e),Ir(e,(e=>{kr(e,t,!0,r)})),n&&r&&t(e)}function Pr(e){return new me(null===e.parent?e.name:Pr(e.parent)+"/"+e.name)}function Nr(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Er(e)&&!Sr(e)}(n),i=(0,o.contains)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Nr(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Nr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Or=/[\[\].#$\/\u0000-\u001F\u007F]/,Lr=/[\[\].#$\u0000-\u001F\u007F]/,Ar=10485760,Rr=function(e){return"string"==typeof e&&0!==e.length&&!Or.test(e)},Dr=function(e){return"string"==typeof e&&0!==e.length&&!Lr.test(e)},Mr=function(e,t,n,r){r&&void 0===t||Fr((0,o.errorPrefix)(e,"value"),t,n)},Fr=function(e,t,n){const r=n instanceof me?new Pe(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Oe(r));if("function"==typeof t)throw new Error(e+"contains a function "+Oe(r)+" with contents = "+t.toString());if(P(t))throw new Error(e+"contains "+t.toString()+" "+Oe(r));if("string"==typeof t&&t.length>3495253.3333333335&&(0,o.stringLength)(t)>Ar)throw new Error(e+"contains a string greater than "+Ar+" utf8 bytes "+Oe(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(F(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Rr(t)))throw new Error(e+" contains an invalid key ("+t+") "+Oe(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,l;l=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(l),a.byteLength_+=(0,o.stringLength)(l),Ne(a),Fr(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=(0,o.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+Oe(r)+" in addition to actual children.")}},jr=function(e,t,n,r){if(!(r&&void 0===n||Dr(n)))throw new Error((0,o.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},qr=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jr(e,t,n,r)},Hr=function(e,t){if(".info"===_e(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ur=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Rr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Dr(e)}(n))throw new Error((0,o.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wr(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Ie(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function zr(e,t,n){Wr(e,n),Vr(e,(e=>ke(e,t)||ke(t,e)))}function Vr(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Gr(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Gr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();b&&E("event: "+n.toString()),U(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="repo_interrupt",Yr=25;class Kr{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Br,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Et(),this.transactionQueueTree_=new Tr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jr(e,t,n){if(e.stats_=ne(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Tt(e.repoInfo_,((t,n,r,i)=>{Zr(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ei(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Re(e.repoInfo_,t,((t,n,r,i)=>{Zr(e,t,n,r,i)}),(t=>{ei(e,t)}),(t=>{!function(e,t){F(t,((t,n)=>{ti(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return te[n]||(te[n]=t()),te[n]}(e.repoInfo_,(()=>new kt(e.stats_,e.server_))),e.infoData_=new Ct,e.infoSyncTree_=new Yn({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Xn(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),ti(e,"connected",!1),e.serverSyncTree_=new Yn({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);zr(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Xr(e){const t=e.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Qr(e){return gr({timestamp:Xr(e)})}function Zr(e,t,n,r,i){e.dataUpdateCount++;const s=new me(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,o.map)(n,(e=>ct(e)));a=function(e,t,n,r){const i=cr(e,r);if(i){const r=ur(i),s=r.path,o=r.queryId,a=Se(s,t),l=Vt.fromObject(n);return dr(e,s,new Dt(Ot(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=ct(n);a=Zn(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,o.map)(n,(e=>ct(e)));a=function(e,t,n){const r=Vt.fromObject(n);return rr(e,new Dt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=ct(n);a=Xn(e.serverSyncTree_,s,t)}let l=s;a.length>0&&(l=ci(e,s)),zr(e.eventQueue_,l,a)}function ei(e,t){ti(e,"connected",t),!1===t&&function(e){si(e,"onDisconnectEvents");const t=Qr(e),n=Et();St(e.onDisconnect_,ve(),((r,i)=>{const s=yr(r,i,e.serverSyncTree_,t);xt(n,r,s)}));let r=[];St(n,ve(),((t,n)=>{r=r.concat(Xn(e.serverSyncTree_,t,n));const i=fi(e,t);ci(e,i)})),e.onDisconnect_=Et(),zr(e.eventQueue_,ve(),r)}(e)}function ti(e,t,n){const r=new me("/.info/"+t),i=ct(n);e.infoData_.updateSnapshot(r,i);const s=Xn(e.infoSyncTree_,r,i);zr(e.eventQueue_,r,s)}function ni(e){return e.nextWriteId_++}function ri(e,t,n,r,i){si(e,"set",{path:t.toString(),value:n,priority:r});const s=Qr(e),o=ct(n,r),a=tr(e.serverSyncTree_,t),l=wr(o,a,s),c=ni(e),u=Kn(e.serverSyncTree_,t,l,c,!0);Wr(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||k("set at "+t+" failed: "+n);const o=Jn(e.serverSyncTree_,c,!s);zr(e.eventQueue_,t,o),oi(e,i,n,r)}));const d=fi(e,t);ci(e,d),zr(e.eventQueue_,d,[])}function ii(e){e.persistentConnection_&&e.persistentConnection_.interrupt($r)}function si(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function oi(e,t,n,r){t&&U((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function ai(e,t,n){return tr(e.serverSyncTree_,t,n)||ot.EMPTY_NODE}function li(e,t=e.transactionQueueTree_){if(t||pi(e,t),Er(t)){const n=di(e,t);(0,o.assert)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=ai(e,t,r);let s=i;const a=i.hash();for(let e=0;e<n.length;e++){const r=n[e];(0,o.assert)(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=Se(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const l=s.val(!0),c=t;e.server_.put(c.toString(),l,(r=>{si(e,"transaction put response",{path:c.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Jn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();pi(e,Cr(e.transactionQueueTree_,t)),li(e,e.transactionQueueTree_),zr(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)U(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+c.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}ci(e,t)}}),a)}(e,Pr(t),n)}else Sr(t)&&Ir(t,(t=>{li(e,t)}))}function ci(e,t){const n=ui(e,t),r=Pr(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),a=s.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const c=t[s],u=Se(n,c.path);let d,h=!1;if((0,o.assert)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,d=c.abortReason,i=i.concat(Jn(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=Yr)h=!0,d="maxretry",i=i.concat(Jn(e.serverSyncTree_,c.currentWriteId,!0));else{const n=ai(e,c.path,a);c.currentInputSnapshot=n;const r=t[s].update(n.val());if(void 0!==r){Fr("transaction failed: Data returned ",r,c.path);let t=ct(r);"object"==typeof r&&null!=r&&(0,o.contains)(r,".priority")||(t=t.updatePriority(n.getPriority()));const s=c.currentWriteId,l=Qr(e),u=wr(t,n,l);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=u,c.currentWriteId=ni(e),a.splice(a.indexOf(s),1),i=i.concat(Kn(e.serverSyncTree_,c.path,u,c.currentWriteId,c.applyLocally)),i=i.concat(Jn(e.serverSyncTree_,s,!0))}else h=!0,d="nodata",i=i.concat(Jn(e.serverSyncTree_,c.currentWriteId,!0))}zr(e.eventQueue_,n,i),i=[],h&&(t[s].status=2,l=t[s].unwatcher,setTimeout(l,Math.floor(0)),t[s].onComplete&&("nodata"===d?r.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):r.push((()=>t[s].onComplete(new Error(d),!1,null)))))}var l;pi(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)U(r[e]);li(e,e.transactionQueueTree_)}(e,di(e,n),r),r}function ui(e,t){let n,r=e.transactionQueueTree_;for(n=_e(t);null!==n&&void 0===Er(r);)r=Cr(r,n),n=_e(t=we(t));return r}function di(e,t){const n=[];return hi(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function hi(e,t,n){const r=Er(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Ir(t,(t=>{hi(e,t,n)}))}function pi(e,t){const n=Er(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,xr(t,n.length>0?n:void 0)}Ir(t,(t=>{pi(e,t)}))}function fi(e,t){const n=Pr(ui(e,t)),r=Cr(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{gi(e,t)})),gi(e,r),kr(r,(t=>{gi(e,t)})),n}function gi(e,t){const n=Er(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.assert)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Jn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?xr(t,void 0):n.length=s+1,zr(e.eventQueue_,Pr(t),i);for(let e=0;e<r.length;e++)U(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=function(e,t){const n=vi(e),r=n.namespace;"firebase.com"===n.domain&&I(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||I("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new X(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new me(n.pathString)}},vi=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,d)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},_i="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.stringify)(this.snapshot.exportVal())}}class wi{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return xe(this._path)?null:be(this._path)}get ref(){return new Ci(this._repo,this._path)}get _queryIdentifier(){const e=bt(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return bt(this._queryParams)}isEqual(e){if(!((e=(0,o.getModularInstance)(e))instanceof Ti))return!1;const t=this._repo===e._repo,n=Ie(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Ci extends Ti{constructor(e,t){super(e,t,new yt,!1)}get parent(){const e=Ce(this._path);return null===e?null:new Ci(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Ei{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new me(e),n=Si(this.ref,e);return new Ei(this._node.getChild(t),n,Qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Ei(n,Si(this.ref,t),Qe))))}hasChild(e){const t=new me(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xi(e,t){return(e=(0,o.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?Si(e._root,t):e._root}function Si(e,t){return null===_e((e=(0,o.getModularInstance)(e))._path)?qr("child","path",t,!1):jr("child","path",t,!1),new Ci(e._repo,Ee(e._path,t))}function Ii(e,t){e=(0,o.getModularInstance)(e),Hr("set",e._path),Mr("set",t,e._path,!1);const n=new(0,o.Deferred);return ri(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function ki(e){e=(0,o.getModularInstance)(e);const t=new bi((()=>{})),n=new Pi(t);return function(e,t,n){const r=nr(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=ct(r).withIndex(t._queryParams.getIndex());let s;if(er(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Xn(e.serverSyncTree_,t._path,i);else{const n=ar(e.serverSyncTree_,t);s=Zn(e.serverSyncTree_,t._path,i,n)}return zr(e.eventQueue_,t._path,s),Qn(e.serverSyncTree_,t,n,null,!0),i}),(n=>(si(e,"get for query "+(0,o.stringify)(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Ei(t,new Ci(e._repo,e._path),e._queryParams.getIndex())))}class Pi{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new yi("value",this,new Ei(e.snapshotNode,new Ci(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wi(this,e,t):null}matches(e){return e instanceof Pi&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}!function(e){(0,o.assert)(!Rn,"__referenceConstructor has already been defined"),Rn=e}(Ci),function(e){(0,o.assert)(!Dn,"__referenceConstructor has already been defined"),Dn=e}(Ci);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ni="FIREBASE_DATABASE_EMULATOR_HOST",Oi={};let Li=!1;function Ai(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||I("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=mi(s,i),u=c.repoInfo;void 0!==l&&l.env&&(a=l.env[Ni]),a?(o=!0,s=`http://${a}?ns=${u.namespace}`,c=mi(s,i),u=c.repoInfo):o=!c.repoInfo.secure;const d=i&&o?new V(V.OWNER):new z(e.name,e.options,t);Ur("Invalid Firebase Database URL",c),xe(c.path)||I("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=Oi[t.name];i||(i={},Oi[t.name]=i);let s=i[e.toURLString()];s&&I("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Kr(e,Li,n,r),i[e.toURLString()]=s,s}(u,e,d,new W(e.name,n));return new Ri(h,e)}class Ri{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ci(this._repo,ve())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Oi[t];n&&n[e.key]===e||I(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ii(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&I("Cannot call "+e+" on a deleted database.")}}function Di(e=(0,r.getApp)(),t){const n=(0,r._getProvider)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.getDefaultEmulatorHostnameAndPort)("database");e&&function(e,t,n,r={}){e=(0,o.getModularInstance)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&I("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&I('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new V(V.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:(0,o.createMockUserToken)(r.mockUserToken,e.app.options.projectId);s=new V(t)}!function(e,t,n,r){e.repoInfo_=new X(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,s)}(n,...e)}return n}Re.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Re.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mi,Fi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fi=r.SDK_VERSION,d=Fi,(0,r._registerComponent)(new(0,i.Component)("database",((e,{instanceIdentifier:t})=>Ai(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(c,u,Mi),(0,r.registerVersion)(c,u,"esm2017")})),s.register("MjY8E",(function(t,n){e(t.exports,"_registerComponent",(function(){return v})),e(t.exports,"_getProvider",(function(){return _})),e(t.exports,"SDK_VERSION",(function(){return T})),e(t.exports,"initializeApp",(function(){return C})),e(t.exports,"getApp",(function(){return E})),e(t.exports,"registerVersion",(function(){return x}));var r=s("6ExWU"),i=s("kZfxc"),o=s("2xDiJ"),a=(o=s("2xDiJ"),s("ajgRO"));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const c="@firebase/app",u="0.9.10",d=new(0,i.Logger)("@firebase/app"),h="[DEFAULT]",p={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e){const t=e.name;if(g.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;g.set(t,e);for(const t of f.values())m(t,e);return!0}function _(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},w=new(0,o.ErrorFactory)("app","Firebase",y);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="9.22.0";function C(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw w.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw w.create("no-options");const a=f.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw w.create("duplicate-app",{appName:s})}const l=new(0,r.ComponentContainer)(s);for(const e of g.values())l.addComponent(e);const c=new b(n,i,l);return f.set(s,c),c}function E(e=h){const t=f.get(e);if(!t&&e===h&&(0,o.getDefaultAppConfig)())return C();if(!t)throw w.create("no-app",{appName:e});return t}function x(e,t,n){var i;let s=null!==(i=p[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}v(new(0,r.Component)(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="firebase-heartbeat-database",I=1,k="firebase-heartbeat-store";let P=null;function N(){return P||(P=(0,a.openDB)(S,I,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(k)}}).catch((e=>{throw w.create("idb-open",{originalErrorMessage:e.message})}))),P}async function O(e,t){try{const n=(await N()).transaction(k,"readwrite"),r=n.objectStore(k);await r.put(t,L(e)),await n.done}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{const t=w.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}function L(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new D(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=R();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=R(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),M(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function R(){return(new Date).toISOString().substring(0,10)}class D{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await N();return await t.transaction(k).objectStore(k).get(L(e))}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{const t=w.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function M(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;F="",v(new(0,r.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),v(new(0,r.Component)("heartbeat",(e=>new A(e)),"PRIVATE")),x(c,u,F),x(c,u,"esm2017"),x("fire-js","")})),s.register("6ExWU",(function(t,n){e(t.exports,"Component",(function(){return i})),e(t.exports,"ComponentContainer",(function(){return l}));var r=s("2xDiJ");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,r.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),s.register("2xDiJ",(function(n,r){e(n.exports,"assert",(function(){return a})),e(n.exports,"assertionError",(function(){return l})),e(n.exports,"base64",(function(){return u})),e(n.exports,"base64Encode",(function(){return h})),e(n.exports,"base64urlEncodeWithoutPadding",(function(){return p})),e(n.exports,"base64Decode",(function(){return f})),e(n.exports,"deepCopy",(function(){return g})),e(n.exports,"getDefaultEmulatorHost",(function(){return y})),e(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return w})),e(n.exports,"getDefaultAppConfig",(function(){return b})),e(n.exports,"getExperimentalSetting",(function(){return T})),e(n.exports,"Deferred",(function(){return C})),e(n.exports,"createMockUserToken",(function(){return E})),e(n.exports,"getUA",(function(){return x})),e(n.exports,"isMobileCordova",(function(){return S})),e(n.exports,"isBrowserExtension",(function(){return I})),e(n.exports,"isReactNative",(function(){return k})),e(n.exports,"isIE",(function(){return P})),e(n.exports,"isNodeSdk",(function(){return N})),e(n.exports,"isIndexedDBAvailable",(function(){return O})),e(n.exports,"validateIndexedDBOpenable",(function(){return L})),e(n.exports,"FirebaseError",(function(){return A})),e(n.exports,"ErrorFactory",(function(){return R})),e(n.exports,"jsonEval",(function(){return M})),e(n.exports,"stringify",(function(){return F})),e(n.exports,"isValidFormat",(function(){return q})),e(n.exports,"isAdmin",(function(){return H})),e(n.exports,"contains",(function(){return U})),e(n.exports,"safeGet",(function(){return B})),e(n.exports,"isEmpty",(function(){return W})),e(n.exports,"map",(function(){return z})),e(n.exports,"deepEqual",(function(){return V})),e(n.exports,"querystring",(function(){return $})),e(n.exports,"querystringDecode",(function(){return Y})),e(n.exports,"extractQuerystring",(function(){return K})),e(n.exports,"Sha1",(function(){return J})),e(n.exports,"createSubscribe",(function(){return X})),e(n.exports,"errorPrefix",(function(){return ee})),e(n.exports,"stringToByteArray",(function(){return te})),e(n.exports,"stringLength",(function(){return ne})),e(n.exports,"getModularInstance",(function(){return re}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i=s("6qd2L");const o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw l(t)},l=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},c=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;a||(h=64,s||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new d;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h=function(e){const t=c(e);return u.encodeByteArray(t,!0)},p=function(e){return h(e).replace(/\./g,"")},f=function(e){try{return u.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){return m(void 0,e)}function m(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=m(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,_=()=>{try{return v()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&f(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},w=e=>{const t=y(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},b=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},T=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[p(JSON.stringify({alg:"none",type:"JWT"})),p(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function S(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(x())}function I(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function k(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function P(){const e=x();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function O(){try{return"object"==typeof indexedDB}catch(e){return!1}}function L(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(D,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new A(r,o,n)}}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return JSON.parse(e)}function F(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=M(f(s[0])||""),n=M(f(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},q=function(e){const t=j(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},H=function(e){const t=j(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function W(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function z(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function V(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(G(n)&&G(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function G(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Y(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function K(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):e<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const t=(s<<5|s>>>27)+r+c+i+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function X(e,t){const n=new Q(e,t);return n.subscribe.bind(n)}class Q{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Z),void 0===r.error&&(r.error=Z),void 0===r.complete&&(r.complete=Z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,a(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ne=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e){return e&&e._delegate?e._delegate:e}})),s.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,c=[],u=!1,d=-1;function h(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&p())}function p(){if(!u){var e=a(h);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),s.register("kZfxc",(function(t,n){e(t.exports,"LogLevel",(function(){return i})),e(t.exports,"Logger",(function(){return u})),e(t.exports,"setLogLevel",(function(){return d})),e(t.exports,"setUserLogHandler",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,l={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=l[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function d(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}})),s.register("ajgRO",(function(t,n){e(t.exports,"openDB",(function(){return i}));var r=s("kKOTz");r=s("kKOTz");function i(e,t,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),l=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(e=>{i((0,r.w)(a.result),e.oldVersion,e.newVersion,(0,r.w)(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),l.then((e=>{o&&e.addEventListener("close",(()=>o())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),l}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return l.set(t,s),s}(0,r.r)((e=>({...e,get:(t,n,r)=>c(t,n)||e.get(t,n,r),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),s.register("kKOTz",(function(t,n){e(t.exports,"w",(function(){return g})),e(t.exports,"r",(function(){return h}));const r=(e,t)=>t.some((t=>e instanceof t));let i,s;const o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap;let d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function h(e){d=e(d)}function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),g(o.get(this))}:function(...t){return g(e.apply(m(this),t))}:function(t,...n){const r=e.call(m(this),t,...n);return l.set(r,t.sort?t.sort():[t]),g(r)}}function f(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(a.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));a.set(e,t)}(e),r(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,d):e)}function g(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=f(e);return t!==e&&(c.set(e,t),u.set(t,e)),t}const m=e=>u.get(e)})),s.register("bc0hQ",(function(t,n){e(t.exports,"INITIAL_STATE_VALUE",(function(){return r}));const r={shoppingList:[],theme:"light"}})),s.register("1R002",(function(t,r){e(t.exports,"notification",(function(){return o}));var i=s("jvJkn");n(i).options={closeButton:!0,debug:!1,newestOnTop:!0,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:300,hideDuration:3e3,timeOut:5e3,extendedTimeOut:1e3,showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};const o=n(i)})),s.register("jvJkn",(function(e,t){("function"==typeof define&&define.amd?define:function(t,n){e.exports?e.exports=n(s("9qak9")):window.toastr=n(window.jQuery)})(["jquery"],(function(e){return function(){var t,n,r,i=0,s="error",o="info",a="success",l="warning",c={clear:function(n,r){var i=f();t||u(i),d(n,i,r)||function(n){for(var r=t.children(),i=r.length-1;i>=0;i--)d(e(r[i]),n)}(i)},remove:function(n){var r=f();t||u(r),n&&0===e(":focus",n).length?g(n):t.children().length&&t.remove()},error:function(e,t,n){return p({type:s,iconClass:f().iconClasses.error,message:e,optionsOverride:n,title:t})},getContainer:u,info:function(e,t,n){return p({type:o,iconClass:f().iconClasses.info,message:e,optionsOverride:n,title:t})},options:{},subscribe:function(e){n=e},success:function(e,t,n){return p({type:a,iconClass:f().iconClasses.success,message:e,optionsOverride:n,title:t})},version:"2.1.4",warning:function(e,t,n){return p({type:l,iconClass:f().iconClasses.warning,message:e,optionsOverride:n,title:t})}};return c;function u(n,r){return n||(n=f()),(t=e("#"+n.containerId)).length||r&&(t=function(n){return(t=e("<div/>").attr("id",n.containerId).addClass(n.positionClass)).appendTo(e(n.target)),t}(n)),t}function d(t,n,r){var i=!(!r||!r.force)&&r.force;return!(!t||!i&&0!==e(":focus",t).length||(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){g(t)}}),0))}function h(e){n&&n(e)}function p(n){var s=f(),o=n.iconClass||s.iconClass;if(void 0!==n.optionsOverride&&(s=e.extend(s,n.optionsOverride),o=n.optionsOverride.iconClass||o),!function(e,t){if(e.preventDuplicates){if(t.message===r)return!0;r=t.message}return!1}(s,n)){i++,t=u(s,!0);var a=null,l=e("<div/>"),c=e("<div/>"),d=e("<div/>"),p=e("<div/>"),m=e(s.closeHtml),v={intervalId:null,hideEta:null,maxHideTime:null},_={toastId:i,state:"visible",startTime:new Date,options:s,map:n};return n.iconClass&&l.addClass(s.toastClass).addClass(o),function(){if(n.title){var e=n.title;s.escapeHtml&&(e=y(n.title)),c.append(e).addClass(s.titleClass),l.append(c)}}(),function(){if(n.message){var e=n.message;s.escapeHtml&&(e=y(n.message)),d.append(e).addClass(s.messageClass),l.append(d)}}(),s.closeButton&&(m.addClass(s.closeClass).attr("role","button"),l.prepend(m)),s.progressBar&&(p.addClass(s.progressClass),l.prepend(p)),s.rtl&&l.addClass("rtl"),s.newestOnTop?t.prepend(l):t.append(l),function(){var e="";switch(n.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}l.attr("aria-live",e)}(),l.hide(),l[s.showMethod]({duration:s.showDuration,easing:s.showEasing,complete:s.onShown}),s.timeOut>0&&(a=setTimeout(w,s.timeOut),v.maxHideTime=parseFloat(s.timeOut),v.hideEta=(new Date).getTime()+v.maxHideTime,s.progressBar&&(v.intervalId=setInterval(C,10))),s.closeOnHover&&l.hover(T,b),!s.onclick&&s.tapToDismiss&&l.click(w),s.closeButton&&m&&m.click((function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),s.onCloseClick&&s.onCloseClick(e),w(!0)})),s.onclick&&l.click((function(e){s.onclick(e),w()})),h(_),s.debug&&console&&console.log(_),l}function y(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w(t){var n=t&&!1!==s.closeMethod?s.closeMethod:s.hideMethod,r=t&&!1!==s.closeDuration?s.closeDuration:s.hideDuration,i=t&&!1!==s.closeEasing?s.closeEasing:s.hideEasing;if(!e(":focus",l).length||t)return clearTimeout(v.intervalId),l[n]({duration:r,easing:i,complete:function(){g(l),clearTimeout(a),s.onHidden&&"hidden"!==_.state&&s.onHidden(),_.state="hidden",_.endTime=new Date,h(_)}})}function b(){(s.timeOut>0||s.extendedTimeOut>0)&&(a=setTimeout(w,s.extendedTimeOut),v.maxHideTime=parseFloat(s.extendedTimeOut),v.hideEta=(new Date).getTime()+v.maxHideTime)}function T(){clearTimeout(a),v.hideEta=0,l.stop(!0,!0)[s.showMethod]({duration:s.showDuration,easing:s.showEasing})}function C(){var e=(v.hideEta-(new Date).getTime())/v.maxHideTime*100;p.width(e+"%")}}function f(){return e.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},c.options)}function g(e){t||(t=u()),e.is(":visible")||(e.remove(),e=null,0===t.children().length&&(t.remove(),r=void 0))}}()}))})),s.register("9qak9",(function(e,t){
/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */
!function(t,n){"use strict";"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:e.exports,(function(e,t){"use strict";var n=[],r=Object.getPrototypeOf,i=n.slice,s=n.flat?function(e){return n.flat.call(e)}:function(e){return n.concat.apply([],e)},o=n.push,a=n.indexOf,l={},c=l.toString,u=l.hasOwnProperty,d=u.toString,h=d.call(Object),p={},f=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},g=function(e){return null!=e&&e===e.window},m=e.document,v={type:!0,src:!0,nonce:!0,noModule:!0};function _(e,t,n){var r,i,s=(n=n||m).createElement("script");if(s.text=e,t)for(r in v)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&s.setAttribute(r,i);n.head.appendChild(s).parentNode.removeChild(s)}function y(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var w="3.7.0",b=/HTML$/i,T=function(e,t){return new T.fn.init(e,t)};function C(e){var t=!!e&&"length"in e&&e.length,n=y(e);return!f(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function E(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}T.fn=T.prototype={jquery:w,constructor:T,length:0,toArray:function(){return i.call(this)},get:function(e){return null==e?i.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(T.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:n.sort,splice:n.splice},T.extend=T.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[a]||{},a++),"object"==typeof o||f(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&o!==r&&(c&&r&&(T.isPlainObject(r)||(i=Array.isArray(r)))?(n=o[t],s=i&&!Array.isArray(n)?[]:i||T.isPlainObject(n)?n:{},i=!1,o[t]=T.extend(c,s,r)):void 0!==r&&(o[t]=r));return o},T.extend({expando:"jQuery"+(w+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=r(e))||"function"==typeof(n=u.call(t,"constructor")&&t.constructor)&&d.call(n)===h)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){_(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(C(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i)return e.textContent;if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=T.text(t);return n},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?T.merge(n,"string"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:a.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!b.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,s=e.length,o=!n;i<s;i++)!t(e[i],i)!==o&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return s(a)},guid:1,support:p}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){l["[object "+t+"]"]=t.toLowerCase()}));var x=n.pop,S=n.sort,I=n.splice,k="[\\x20\\t\\r\\n\\f]",P=new RegExp("^"+k+"+|((?:^|[^\\\\])(?:\\\\.)*)"+k+"+$","g");T.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var N=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function O(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}T.escapeSelector=function(e){return(e+"").replace(N,O)};var L=m,A=o;!function(){var t,r,s,o,l,c,d,h,f,g,m=A,v=T.expando,_=0,y=0,w=ee(),b=ee(),C=ee(),N=ee(),O=function(e,t){return e===t&&(l=!0),0},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",D="(?:\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",M="\\["+k+"*("+D+")(?:"+k+"*([*^$|!~]?=)"+k+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+D+"))|)"+k+"*\\]",F=":("+D+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",j=new RegExp(k+"+","g"),q=new RegExp("^"+k+"*,"+k+"*"),H=new RegExp("^"+k+"*([>+~]|"+k+")"+k+"*"),U=new RegExp(k+"|>"),B=new RegExp(F),W=new RegExp("^"+D+"$"),z={ID:new RegExp("^#("+D+")"),CLASS:new RegExp("^\\.("+D+")"),TAG:new RegExp("^("+D+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+k+"*(even|odd|(([+-]|)(\\d*)n|)"+k+"*(?:([+-]|)"+k+"*(\\d+)|))"+k+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+k+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+k+"*((?:-\\d)?\\d*)"+k+"*\\)|)(?=[^-]|$)","i")},V=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Y=/[+~]/,K=new RegExp("\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\([^\\r\\n\\f])","g"),J=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},X=function(){le()},Q=he((function(e){return!0===e.disabled&&E(e,"fieldset")}),{dir:"parentNode",next:"legend"});try{m.apply(n=i.call(L.childNodes),L.childNodes),n[L.childNodes.length].nodeType}catch(e){m={apply:function(e,t){A.apply(e,i.call(t))},call:function(e){A.apply(e,i.call(arguments,1))}}}function Z(e,t,n,r){var i,s,o,a,l,u,d,g=t&&t.ownerDocument,_=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==_&&9!==_&&11!==_)return n;if(!r&&(le(t),t=t||c,h)){if(11!==_&&(l=$.exec(e)))if(i=l[1]){if(9===_){if(!(o=t.getElementById(i)))return n;if(o.id===i)return m.call(n,o),n}else if(g&&(o=g.getElementById(i))&&Z.contains(t,o)&&o.id===i)return m.call(n,o),n}else{if(l[2])return m.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&t.getElementsByClassName)return m.apply(n,t.getElementsByClassName(i)),n}if(!(N[e+" "]||f&&f.test(e))){if(d=e,g=t,1===_&&(U.test(e)||H.test(e))){for((g=Y.test(e)&&ae(t.parentNode)||t)==t&&p.scope||((a=t.getAttribute("id"))?a=T.escapeSelector(a):t.setAttribute("id",a=v)),s=(u=ue(e)).length;s--;)u[s]=(a?"#"+a:":scope")+" "+de(u[s]);d=u.join(",")}try{return m.apply(n,g.querySelectorAll(d)),n}catch(t){N(e,!0)}finally{a===v&&t.removeAttribute("id")}}}return _e(e.replace(P,"$1"),t,n,r)}function ee(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function te(e){return e[v]=!0,e}function ne(e){var t=c.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function re(e){return function(t){return E(t,"input")&&t.type===e}}function ie(e){return function(t){return(E(t,"input")||E(t,"button"))&&t.type===e}}function se(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Q(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function oe(e){return te((function(t){return t=+t,te((function(n,r){for(var i,s=e([],n.length,t),o=s.length;o--;)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))}))}))}function ae(e){return e&&void 0!==e.getElementsByTagName&&e}function le(e){var t,n=e?e.ownerDocument||e:L;return n!=c&&9===n.nodeType&&n.documentElement?(d=(c=n).documentElement,h=!T.isXMLDoc(c),g=d.matches||d.webkitMatchesSelector||d.msMatchesSelector,L!=c&&(t=c.defaultView)&&t.top!==t&&t.addEventListener("unload",X),p.getById=ne((function(e){return d.appendChild(e).id=T.expando,!c.getElementsByName||!c.getElementsByName(T.expando).length})),p.disconnectedMatch=ne((function(e){return g.call(e,"*")})),p.scope=ne((function(){return c.querySelectorAll(":scope")})),p.cssHas=ne((function(){try{return c.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),p.getById?(r.filter.ID=function(e){var t=e.replace(K,J);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&h){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(K,J);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&h){var n,r,i,s=t.getElementById(e);if(s){if((n=s.getAttributeNode("id"))&&n.value===e)return[s];for(i=t.getElementsByName(e),r=0;s=i[r++];)if((n=s.getAttributeNode("id"))&&n.value===e)return[s]}return[]}}),r.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},r.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&h)return t.getElementsByClassName(e)},f=[],ne((function(e){var t;d.appendChild(e).innerHTML="<a id='"+v+"' href='' disabled='disabled'></a><select id='"+v+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||f.push("\\["+k+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+v+"-]").length||f.push("~="),e.querySelectorAll("a#"+v+"+*").length||f.push(".#.+[+~]"),e.querySelectorAll(":checked").length||f.push(":checked"),(t=c.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),d.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&f.push(":enabled",":disabled"),(t=c.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||f.push("\\["+k+"*name"+k+"*="+k+"*(?:''|\"\")")})),p.cssHas||f.push(":has"),f=f.length&&new RegExp(f.join("|")),O=function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!p.sortDetached&&t.compareDocumentPosition(e)===n?e===c||e.ownerDocument==L&&Z.contains(L,e)?-1:t===c||t.ownerDocument==L&&Z.contains(L,t)?1:o?a.call(o,e)-a.call(o,t):0:4&n?-1:1)},c):c}for(t in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(le(e),h&&!N[t+" "]&&(!f||!f.test(t)))try{var n=g.call(e,t);if(n||p.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return Z(t,c,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=c&&le(e),T.contains(e,t)},Z.attr=function(e,t){(e.ownerDocument||e)!=c&&le(e);var n=r.attrHandle[t.toLowerCase()],i=n&&u.call(r.attrHandle,t.toLowerCase())?n(e,t,!h):void 0;return void 0!==i?i:e.getAttribute(t)},Z.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},T.uniqueSort=function(e){var t,n=[],r=0,s=0;if(l=!p.sortStable,o=!p.sortStable&&i.call(e,0),S.call(e,O),l){for(;t=e[s++];)t===e[s]&&(r=n.push(s));for(;r--;)I.call(e,n[r],1)}return o=null,e},T.fn.uniqueSort=function(){return this.pushStack(T.uniqueSort(i.apply(this)))},r=T.expr={cacheLength:50,createPseudo:te,match:z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(K,J),e[3]=(e[3]||e[4]||e[5]||"").replace(K,J),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return z.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&B.test(n)&&(t=ue(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(K,J).toLowerCase();return"*"===e?function(){return!0}:function(e){return E(e,t)}},CLASS:function(e){var t=w[e+" "];return t||(t=new RegExp("(^|"+k+")"+e+"("+k+"|$)"),w(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})))},ATTR:function(e,t,n){return function(r){var i=Z.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(j," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var s="nth"!==e.slice(0,3),o="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,h,p,f=s!==o?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!l&&!a,w=!1;if(g){if(s){for(;f;){for(d=t;d=d[f];)if(a?E(d,m):1===d.nodeType)return!1;p=f="only"===e&&!p&&"nextSibling"}return!0}if(p=[o?g.firstChild:g.lastChild],o&&y){for(w=(h=(c=(u=g[v]||(g[v]={}))[e]||[])[0]===_&&c[1])&&c[2],d=h&&g.childNodes[h];d=++h&&d&&d[f]||(w=h=0)||p.pop();)if(1===d.nodeType&&++w&&d===t){u[e]=[_,h,w];break}}else if(y&&(w=h=(c=(u=t[v]||(t[v]={}))[e]||[])[0]===_&&c[1]),!1===w)for(;(d=++h&&d&&d[f]||(w=h=0)||p.pop())&&(!(a?E(d,m):1===d.nodeType)||!++w||(y&&((u=d[v]||(d[v]={}))[e]=[_,w]),d!==t)););return(w-=i)===r||w%r==0&&w/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e);return i[v]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?te((function(e,n){for(var r,s=i(e,t),o=s.length;o--;)e[r=a.call(e,s[o])]=!(n[r]=s[o])})):function(e){return i(e,0,n)}):i}},pseudos:{not:te((function(e){var t=[],n=[],r=ve(e.replace(P,"$1"));return r[v]?te((function(e,t,n,i){for(var s,o=r(e,null,i,[]),a=e.length;a--;)(s=o[a])&&(e[a]=!(t[a]=s))})):function(e,i,s){return t[0]=e,r(t,null,s,n),t[0]=null,!n.pop()}})),has:te((function(e){return function(t){return Z(e,t).length>0}})),contains:te((function(e){return e=e.replace(K,J),function(t){return(t.textContent||T.text(t)).indexOf(e)>-1}})),lang:te((function(e){return W.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(K,J).toLowerCase(),function(t){var n;do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===function(){try{return c.activeElement}catch(e){}}()&&c.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:se(!1),disabled:se(!0),checked:function(e){return E(e,"input")&&!!e.checked||E(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return V.test(e.nodeName)},button:function(e){return E(e,"input")&&"button"===e.type||E(e,"button")},text:function(e){var t;return E(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:oe((function(){return[0]})),last:oe((function(e,t){return[t-1]})),eq:oe((function(e,t,n){return[n<0?n+t:n]})),even:oe((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:oe((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:oe((function(e,t,n){var r;for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:oe((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}},r.pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=re(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=ie(t);function ce(){}function ue(e,t){var n,i,s,o,a,l,c,u=b[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=r.preFilter;a;){for(o in n&&!(i=q.exec(a))||(i&&(a=a.slice(i[0].length)||a),l.push(s=[])),n=!1,(i=H.exec(a))&&(n=i.shift(),s.push({value:n,type:i[0].replace(P," ")}),a=a.slice(n.length)),r.filter)!(i=z[o].exec(a))||c[o]&&!(i=c[o](i))||(n=i.shift(),s.push({value:n,type:o,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?Z.error(e):b(e,l).slice(0)}function de(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function he(e,t,n){var r=t.dir,i=t.next,s=i||r,o=n&&"parentNode"===s,a=y++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i);return!1}:function(t,n,l){var c,u,d=[_,a];if(l){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||o)if(u=t[v]||(t[v]={}),i&&E(t,i))t=t[r]||t;else{if((c=u[s])&&c[0]===_&&c[1]===a)return d[2]=c[2];if(u[s]=d,d[2]=e(t,n,l))return!0}return!1}}function pe(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function fe(e,t,n,r,i){for(var s,o=[],a=0,l=e.length,c=null!=t;a<l;a++)(s=e[a])&&(n&&!n(s,r,i)||(o.push(s),c&&t.push(a)));return o}function ge(e,t,n,r,i,s){return r&&!r[v]&&(r=ge(r)),i&&!i[v]&&(i=ge(i,s)),te((function(s,o,l,c){var u,d,h,p,f=[],g=[],v=o.length,_=s||function(e,t,n){for(var r=0,i=t.length;r<i;r++)Z(e,t[r],n);return n}(t||"*",l.nodeType?[l]:l,[]),y=!e||!s&&t?_:fe(_,f,e,l,c);if(n?n(y,p=i||(s?e:v||r)?[]:o,l,c):p=y,r)for(u=fe(p,g),r(u,[],l,c),d=u.length;d--;)(h=u[d])&&(p[g[d]]=!(y[g[d]]=h));if(s){if(i||e){if(i){for(u=[],d=p.length;d--;)(h=p[d])&&u.push(y[d]=h);i(null,p=[],u,c)}for(d=p.length;d--;)(h=p[d])&&(u=i?a.call(s,h):f[d])>-1&&(s[u]=!(o[u]=h))}}else p=fe(p===o?p.splice(v,p.length):p),i?i(null,o,p,c):m.apply(o,p)}))}function me(e){for(var t,n,i,o=e.length,l=r.relative[e[0].type],c=l||r.relative[" "],u=l?1:0,d=he((function(e){return e===t}),c,!0),h=he((function(e){return a.call(t,e)>-1}),c,!0),p=[function(e,n,r){var i=!l&&(r||n!=s)||((t=n).nodeType?d(e,n,r):h(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[he(pe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[v]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return ge(u>1&&pe(p),u>1&&de(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(P,"$1"),n,u<i&&me(e.slice(u,i)),i<o&&me(e=e.slice(i)),i<o&&de(e))}p.push(n)}return pe(p)}function ve(e,t){var n,i=[],o=[],a=C[e+" "];if(!a){for(t||(t=ue(e)),n=t.length;n--;)(a=me(t[n]))[v]?i.push(a):o.push(a);a=C(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,l,u,d){var p,f,g,v=0,y="0",w=o&&[],b=[],C=s,E=o||i&&r.find.TAG("*",d),S=_+=null==C?1:Math.random()||.1,I=E.length;for(d&&(s=a==c||a||d);y!==I&&null!=(p=E[y]);y++){if(i&&p){for(f=0,a||p.ownerDocument==c||(le(p),l=!h);g=e[f++];)if(g(p,a||c,l)){m.call(u,p);break}d&&(_=S)}n&&((p=!g&&p)&&v--,o&&w.push(p))}if(v+=y,n&&y!==v){for(f=0;g=t[f++];)g(w,b,a,l);if(o){if(v>0)for(;y--;)w[y]||b[y]||(b[y]=x.call(u));b=fe(b)}m.apply(u,b),d&&!o&&b.length>0&&v+t.length>1&&T.uniqueSort(u)}return d&&(_=S,s=C),w};return n?te(o):o}(o,i)),a.selector=e}return a}function _e(e,t,n,i){var s,o,a,l,c,u="function"==typeof e&&e,d=!i&&ue(e=u.selector||e);if(n=n||[],1===d.length){if((o=d[0]=d[0].slice(0)).length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&h&&r.relative[o[1].type]){if(!(t=(r.find.ID(a.matches[0].replace(K,J),t)||[])[0]))return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(s=z.needsContext.test(e)?0:o.length;s--&&(a=o[s],!r.relative[l=a.type]);)if((c=r.find[l])&&(i=c(a.matches[0].replace(K,J),Y.test(o[0].type)&&ae(t.parentNode)||t))){if(o.splice(s,1),!(e=i.length&&de(o)))return m.apply(n,i),n;break}}return(u||ve(e,d))(i,t,!h,n,!t||Y.test(e)&&ae(t.parentNode)||t),n}ce.prototype=r.filters=r.pseudos,r.setFilters=new ce,p.sortStable=v.split("").sort(O).join("")===v,le(),p.sortDetached=ne((function(e){return 1&e.compareDocumentPosition(c.createElement("fieldset"))})),T.find=Z,T.expr[":"]=T.expr.pseudos,T.unique=T.uniqueSort,Z.compile=ve,Z.select=_e,Z.setDocument=le,Z.escape=T.escapeSelector,Z.getText=T.text,Z.isXML=T.isXMLDoc,Z.selectors=T.expr,Z.support=T.support,Z.uniqueSort=T.uniqueSort}();var R=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&T(e).is(n))break;r.push(e)}return r},D=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},M=T.expr.match.needsContext,F=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return f(t)?T.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?T.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?T.grep(e,(function(e){return a.call(t,e)>-1!==n})):T.filter(t,e,n)}T.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?T.find.matchesSelector(r,e)?[r]:[]:T.find.matches(e,T.grep(t,(function(e){return 1===e.nodeType})))},T.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(T(e).filter((function(){for(t=0;t<r;t++)if(T.contains(i[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)T.find(e,i[t],n);return r>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&M.test(e)?T(e):e||[],!1).length}});var q,H=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:H.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:m,!0)),F.test(r[1])&&T.isPlainObject(t))for(r in t)f(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=m.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):f(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,q=T(m);var U=/^(?:parents|prev(?:Until|All))/,B={children:!0,contents:!0,next:!0,prev:!0};function W(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,s=[],o="string"!=typeof e&&T(e);if(!M.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(s.length>1?T.uniqueSort(s):s)},index:function(e){return e?"string"==typeof e?a.call(T(e),this[0]):a.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return R(e,"parentNode")},parentsUntil:function(e,t,n){return R(e,"parentNode",n)},next:function(e){return W(e,"nextSibling")},prev:function(e){return W(e,"previousSibling")},nextAll:function(e){return R(e,"nextSibling")},prevAll:function(e){return R(e,"previousSibling")},nextUntil:function(e,t,n){return R(e,"nextSibling",n)},prevUntil:function(e,t,n){return R(e,"previousSibling",n)},siblings:function(e){return D((e.parentNode||{}).firstChild,e)},children:function(e){return D(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(E(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},(function(e,t){T.fn[e]=function(n,r){var i=T.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=T.filter(r,i)),this.length>1&&(B[e]||T.uniqueSort(i),U.test(e)&&i.reverse()),this.pushStack(i)}}));var z=/[^\x20\t\r\n\f]+/g;function V(e){return e}function G(e){throw e}function $(e,t,n,r){var i;try{e&&f(i=e.promise)?i.call(e).done(t).fail(n):e&&f(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}T.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return T.each(e.match(z)||[],(function(e,n){t[n]=!0})),t}(e):T.extend({},e);var t,n,r,i,s=[],o=[],a=-1,l=function(){for(i=i||e.once,r=t=!0;o.length;a=-1)for(n=o.shift();++a<s.length;)!1===s[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=s.length,n=!1);e.memory||(n=!1),t=!1,i&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(a=s.length-1,o.push(n)),function t(n){T.each(n,(function(n,r){f(r)?e.unique&&c.has(r)||s.push(r):r&&r.length&&"string"!==y(r)&&t(r)}))}(arguments),n&&!t&&l()),this},remove:function(){return T.each(arguments,(function(e,t){for(var n;(n=T.inArray(t,s,n))>-1;)s.splice(n,1),n<=a&&a--})),this},has:function(e){return e?T.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return i=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return i=o=[],n||t||(s=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],o.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},T.extend({Deferred:function(t){var n=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return T.Deferred((function(t){T.each(n,(function(n,r){var i=f(e[r[4]])&&e[r[4]];s[r[1]]((function(){var e=i&&i.apply(this,arguments);e&&f(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(t,r,i){var s=0;function o(t,n,r,i){return function(){var a=this,l=arguments,c=function(){var e,c;if(!(t<s)){if((e=r.apply(a,l))===n.promise())throw new TypeError("Thenable self-resolution");c=e&&("object"==typeof e||"function"==typeof e)&&e.then,f(c)?i?c.call(e,o(s,n,V,i),o(s,n,G,i)):(s++,c.call(e,o(s,n,V,i),o(s,n,G,i),o(s,n,V,n.notifyWith))):(r!==V&&(a=void 0,l=[e]),(i||n.resolveWith)(a,l))}},u=i?c:function(){try{c()}catch(e){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(e,u.error),t+1>=s&&(r!==G&&(a=void 0,l=[e]),n.rejectWith(a,l))}};t?u():(T.Deferred.getErrorHook?u.error=T.Deferred.getErrorHook():T.Deferred.getStackHook&&(u.error=T.Deferred.getStackHook()),e.setTimeout(u))}}return T.Deferred((function(e){n[0][3].add(o(0,e,f(i)?i:V,e.notifyWith)),n[1][3].add(o(0,e,f(t)?t:V)),n[2][3].add(o(0,e,f(r)?r:G))})).promise()},promise:function(e){return null!=e?T.extend(e,i):i}},s={};return T.each(n,(function(e,t){var o=t[2],a=t[5];i[t[1]]=o.add,a&&o.add((function(){r=a}),n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),o.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=o.fireWith})),i.promise(s),t&&t.call(s,s),s},when:function(e){var t=arguments.length,n=t,r=Array(n),s=i.call(arguments),o=T.Deferred(),a=function(e){return function(n){r[e]=this,s[e]=arguments.length>1?i.call(arguments):n,--t||o.resolveWith(r,s)}};if(t<=1&&($(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||f(s[n]&&s[n].then)))return o.then();for(;n--;)$(s[n],a(n),o.reject);return o.promise()}});var Y=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Y.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},T.readyException=function(t){e.setTimeout((function(){throw t}))};var K=T.Deferred();function J(){m.removeEventListener("DOMContentLoaded",J),e.removeEventListener("load",J),T.ready()}T.fn.ready=function(e){return K.then(e).catch((function(e){T.readyException(e)})),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==e&&--T.readyWait>0||K.resolveWith(m,[T]))}}),T.ready.then=K.then,"complete"===m.readyState||"loading"!==m.readyState&&!m.documentElement.doScroll?e.setTimeout(T.ready):(m.addEventListener("DOMContentLoaded",J),e.addEventListener("load",J));var X=function(e,t,n,r,i,s,o){var a=0,l=e.length,c=null==n;if("object"===y(n))for(a in i=!0,n)X(e,t,a,n[a],!0,s,o);else if(void 0!==r&&(i=!0,f(r)||(o=!0),c&&(o?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(T(e),n)})),t))for(;a<l;a++)t(e[a],n,o?r:r.call(e[a],a,t(e[a],n)));return i?e:c?t.call(e):l?t(e[0],n):s},Q=/^-ms-/,Z=/-([a-z])/g;function ee(e,t){return t.toUpperCase()}function te(e){return e.replace(Q,"ms-").replace(Z,ee)}var ne=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function re(){this.expando=T.expando+re.uid++}re.uid=1,re.prototype={cache:function(e){var t=e[this.expando];return t||(t={},ne(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[te(t)]=n;else for(r in t)i[te(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][te(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(te):(t=te(t))in r?[t]:t.match(z)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||T.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var ie=new re,se=new re,oe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ae=/[A-Z]/g;function le(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ae,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:oe.test(e)?JSON.parse(e):e)}(n)}catch(e){}se.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return se.hasData(e)||ie.hasData(e)},data:function(e,t,n){return se.access(e,t,n)},removeData:function(e,t){se.remove(e,t)},_data:function(e,t,n){return ie.access(e,t,n)},_removeData:function(e,t){ie.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,r,i,s=this[0],o=s&&s.attributes;if(void 0===e){if(this.length&&(i=se.get(s),1===s.nodeType&&!ie.get(s,"hasDataAttrs"))){for(n=o.length;n--;)o[n]&&0===(r=o[n].name).indexOf("data-")&&(r=te(r.slice(5)),le(s,r,i[r]));ie.set(s,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){se.set(this,e)})):X(this,(function(t){var n;if(s&&void 0===t)return void 0!==(n=se.get(s,e))||void 0!==(n=le(s,e))?n:void 0;this.each((function(){se.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){se.remove(this,e)}))}}),T.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=ie.get(e,t),n&&(!r||Array.isArray(n)?r=ie.access(e,t,T.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),r=n.length,i=n.shift(),s=T._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete s.stop,i.call(e,(function(){T.dequeue(e,t)}),s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ie.get(e,n)||ie.access(e,n,{empty:T.Callbacks("once memory").add((function(){ie.remove(e,[t+"queue",n])}))})}}),T.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each((function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){T.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=T.Deferred(),s=this,o=this.length,a=function(){--r||i.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)(n=ie.get(s[o],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var ce=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ue=new RegExp("^(?:([+-])=|)("+ce+")([a-z%]*)$","i"),de=["Top","Right","Bottom","Left"],he=m.documentElement,pe=function(e){return T.contains(e.ownerDocument,e)},fe={composed:!0};he.getRootNode&&(pe=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(fe)===e.ownerDocument});var ge=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&pe(e)&&"none"===T.css(e,"display")};function me(e,t,n,r){var i,s,o=20,a=r?function(){return r.cur()}:function(){return T.css(e,t,"")},l=a(),c=n&&n[3]||(T.cssNumber[t]?"":"px"),u=e.nodeType&&(T.cssNumber[t]||"px"!==c&&+l)&&ue.exec(T.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;o--;)T.style(e,t,u+c),(1-s)*(1-(s=a()/l||.5))<=0&&(o=0),u/=s;u*=2,T.style(e,t,u+c),n=n||[]}return n&&(u=+u||+l||0,i=n[1]?u+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=u,r.end=i)),i}var ve={};function _e(e){var t,n=e.ownerDocument,r=e.nodeName,i=ve[r];return i||(t=n.body.appendChild(n.createElement(r)),i=T.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ve[r]=i,i)}function ye(e,t){for(var n,r,i=[],s=0,o=e.length;s<o;s++)(r=e[s]).style&&(n=r.style.display,t?("none"===n&&(i[s]=ie.get(r,"display")||null,i[s]||(r.style.display="")),""===r.style.display&&ge(r)&&(i[s]=_e(r))):"none"!==n&&(i[s]="none",ie.set(r,"display",n)));for(s=0;s<o;s++)null!=i[s]&&(e[s].style.display=i[s]);return e}T.fn.extend({show:function(){return ye(this,!0)},hide:function(){return ye(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ge(this)?T(this).show():T(this).hide()}))}});var we,be,Te=/^(?:checkbox|radio)$/i,Ce=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ee=/^$|^module$|\/(?:java|ecma)script/i;we=m.createDocumentFragment().appendChild(m.createElement("div")),(be=m.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),we.appendChild(be),p.checkClone=we.cloneNode(!0).cloneNode(!0).lastChild.checked,we.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!we.cloneNode(!0).lastChild.defaultValue,we.innerHTML="<option></option>",p.option=!!we.lastChild;var xe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&E(e,t)?T.merge([e],n):n}function Ie(e,t){for(var n=0,r=e.length;n<r;n++)ie.set(e[n],"globalEval",!t||ie.get(t[n],"globalEval"))}xe.tbody=xe.tfoot=xe.colgroup=xe.caption=xe.thead,xe.th=xe.td,p.option||(xe.optgroup=xe.option=[1,"<select multiple='multiple'>","</select>"]);var ke=/<|&#?\w+;/;function Pe(e,t,n,r,i){for(var s,o,a,l,c,u,d=t.createDocumentFragment(),h=[],p=0,f=e.length;p<f;p++)if((s=e[p])||0===s)if("object"===y(s))T.merge(h,s.nodeType?[s]:s);else if(ke.test(s)){for(o=o||d.appendChild(t.createElement("div")),a=(Ce.exec(s)||["",""])[1].toLowerCase(),l=xe[a]||xe._default,o.innerHTML=l[1]+T.htmlPrefilter(s)+l[2],u=l[0];u--;)o=o.lastChild;T.merge(h,o.childNodes),(o=d.firstChild).textContent=""}else h.push(t.createTextNode(s));for(d.textContent="",p=0;s=h[p++];)if(r&&T.inArray(s,r)>-1)i&&i.push(s);else if(c=pe(s),o=Se(d.appendChild(s),"script"),c&&Ie(o),n)for(u=0;s=o[u++];)Ee.test(s.type||"")&&n.push(s);return d}var Ne=/^([^.]*)(?:\.(.+)|)/;function Oe(){return!0}function Le(){return!1}function Ae(e,t,n,r,i,s){var o,a;if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,a,n,r,t[a],s);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Le;else if(!i)return e;return 1===s&&(o=i,i=function(e){return T().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=T.guid++)),e.each((function(){T.event.add(this,t,i,r,n)}))}function Re(e,t,n){n?(ie.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var n,r=ie.get(this,t);if(1&e.isTrigger&&this[t]){if(r)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(r=i.call(arguments),ie.set(this,t,r),this[t](),n=ie.get(this,t),ie.set(this,t,!1),r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n}else r&&(ie.set(this,t,T.event.trigger(r[0],r.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Oe)}})):void 0===ie.get(e,t)&&T.event.add(e,t,Oe)}T.event={global:{},add:function(e,t,n,r,i){var s,o,a,l,c,u,d,h,p,f,g,m=ie.get(e);if(ne(e))for(n.handler&&(n=(s=n).handler,i=s.selector),i&&T.find.matchesSelector(he,i),n.guid||(n.guid=T.guid++),(l=m.events)||(l=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(t){return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(z)||[""]).length;c--;)p=g=(a=Ne.exec(t[c])||[])[1],f=(a[2]||"").split(".").sort(),p&&(d=T.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,d=T.event.special[p]||{},u=T.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&T.expr.match.needsContext.test(i),namespace:f.join(".")},s),(h=l[p])||((h=l[p]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,f,o)||e.addEventListener&&e.addEventListener(p,o)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),i?h.splice(h.delegateCount++,0,u):h.push(u),T.event.global[p]=!0)},remove:function(e,t,n,r,i){var s,o,a,l,c,u,d,h,p,f,g,m=ie.hasData(e)&&ie.get(e);if(m&&(l=m.events)){for(c=(t=(t||"").match(z)||[""]).length;c--;)if(p=g=(a=Ne.exec(t[c])||[])[1],f=(a[2]||"").split(".").sort(),p){for(d=T.event.special[p]||{},h=l[p=(r?d.delegateType:d.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=h.length;s--;)u=h[s],!i&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||r&&r!==u.selector&&("**"!==r||!u.selector)||(h.splice(s,1),u.selector&&h.delegateCount--,d.remove&&d.remove.call(e,u));o&&!h.length&&(d.teardown&&!1!==d.teardown.call(e,f,m.handle)||T.removeEvent(e,p,m.handle),delete l[p])}else for(p in l)T.event.remove(e,p+t[c],n,r,!0);T.isEmptyObject(l)&&ie.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,s,o,a=new Array(arguments.length),l=T.event.fix(e),c=(ie.get(this,"events")||Object.create(null))[l.type]||[],u=T.event.special[l.type]||{};for(a[0]=l,t=1;t<arguments.length;t++)a[t]=arguments[t];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(o=T.event.handlers.call(this,l,c),t=0;(i=o[t++])&&!l.isPropagationStopped();)for(l.currentTarget=i.elem,n=0;(s=i.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==s.namespace&&!l.rnamespace.test(s.namespace)||(l.handleObj=s,l.data=s.data,void 0!==(r=((T.event.special[s.origType]||{}).handle||s.handler).apply(i.elem,a))&&!1===(l.result=r)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,r,i,s,o,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(s=[],o={},n=0;n<l;n++)void 0===o[i=(r=t[n]).selector+" "]&&(o[i]=r.needsContext?T(i,this).index(c)>-1:T.find(i,this,null,[c]).length),o[i]&&s.push(r);s.length&&a.push({elem:c,handlers:s})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:f(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Te.test(t.type)&&t.click&&E(t,"input")&&Re(t,"click",!0),!1},trigger:function(e){var t=this||e;return Te.test(t.type)&&t.click&&E(t,"input")&&Re(t,"click"),!0},_default:function(e){var t=e.target;return Te.test(t.type)&&t.click&&E(t,"input")&&ie.get(t,"click")||E(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Oe:Le,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:Le,isPropagationStopped:Le,isImmediatePropagationStopped:Le,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Oe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Oe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Oe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},(function(e,t){function n(e){if(m.documentMode){var n=ie.get(this,"handle"),r=T.event.fix(e);r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,n(e),r.target===r.currentTarget&&n(r)}else T.event.simulate(t,e.target,T.event.fix(e))}T.event.special[e]={setup:function(){var r;if(Re(this,e,!0),!m.documentMode)return!1;(r=ie.get(this,t))||this.addEventListener(t,n),ie.set(this,t,(r||0)+1)},trigger:function(){return Re(this,e),!0},teardown:function(){var e;if(!m.documentMode)return!1;(e=ie.get(this,t)-1)?ie.set(this,t,e):(this.removeEventListener(t,n),ie.remove(this,t))},_default:function(t){return ie.get(t.target,e)},delegateType:t},T.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=m.documentMode?this:r,s=ie.get(i,t);s||(m.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),ie.set(i,t,(s||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=m.documentMode?this:r,s=ie.get(i,t)-1;s?ie.set(i,t,s):(m.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),ie.remove(i,t))}}})),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||T.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}})),T.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,T(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Le),this.each((function(){T.event.remove(this,e,n,t)}))}});var De=/<script|<style|<link/i,Me=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return E(e,"table")&&E(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function qe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ue(e,t){var n,r,i,s,o,a;if(1===t.nodeType){if(ie.hasData(e)&&(a=ie.get(e).events))for(i in ie.remove(t,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)T.event.add(t,i,a[i][n]);se.hasData(e)&&(s=se.access(e),o=T.extend({},s),se.set(t,o))}}function Be(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Te.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function We(e,t,n,r){t=s(t);var i,o,a,l,c,u,d=0,h=e.length,g=h-1,m=t[0],v=f(m);if(v||h>1&&"string"==typeof m&&!p.checkClone&&Me.test(m))return e.each((function(i){var s=e.eq(i);v&&(t[0]=m.call(this,i,s.html())),We(s,t,n,r)}));if(h&&(o=(i=Pe(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(l=(a=T.map(Se(i,"script"),qe)).length;d<h;d++)c=i,d!==g&&(c=T.clone(c,!0,!0),l&&T.merge(a,Se(c,"script"))),n.call(e[d],c,d);if(l)for(u=a[a.length-1].ownerDocument,T.map(a,He),d=0;d<l;d++)c=a[d],Ee.test(c.type||"")&&!ie.access(c,"globalEval")&&T.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?T._evalUrl&&!c.noModule&&T._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):_(c.textContent.replace(Fe,""),c,u))}return e}function ze(e,t,n){for(var r,i=t?T.filter(t,e):e,s=0;null!=(r=i[s]);s++)n||1!==r.nodeType||T.cleanData(Se(r)),r.parentNode&&(n&&pe(r)&&Ie(Se(r,"script")),r.parentNode.removeChild(r));return e}T.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,s,o,a=e.cloneNode(!0),l=pe(e);if(!(p.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(o=Se(a),r=0,i=(s=Se(e)).length;r<i;r++)Be(s[r],o[r]);if(t)if(n)for(s=s||Se(e),o=o||Se(a),r=0,i=s.length;r<i;r++)Ue(s[r],o[r]);else Ue(e,a);return(o=Se(a,"script")).length>0&&Ie(o,!l&&Se(e,"script")),a},cleanData:function(e){for(var t,n,r,i=T.event.special,s=0;void 0!==(n=e[s]);s++)if(ne(n)){if(t=n[ie.expando]){if(t.events)for(r in t.events)i[r]?T.event.remove(n,r):T.removeEvent(n,r,t.handle);n[ie.expando]=void 0}n[se.expando]&&(n[se.expando]=void 0)}}}),T.fn.extend({detach:function(e){return ze(this,e,!0)},remove:function(e){return ze(this,e)},text:function(e){return X(this,(function(e){return void 0===e?T.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return We(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)}))},prepend:function(){return We(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return We(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return We(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return T.clone(this,e,t)}))},html:function(e){return X(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!De.test(e)&&!xe[(Ce.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return We(this,arguments,(function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(Se(this)),n&&n.replaceChild(t,this))}),e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){T.fn[e]=function(e){for(var n,r=[],i=T(e),s=i.length-1,a=0;a<=s;a++)n=a===s?this:this.clone(!0),T(i[a])[t](n),o.apply(r,n.get());return this.pushStack(r)}}));var Ve=new RegExp("^("+ce+")(?!px)[a-z%]+$","i"),Ge=/^--/,$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Ye=function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=s[i];return r},Ke=new RegExp(de.join("|"),"i");function Je(e,t,n){var r,i,s,o,a=Ge.test(t),l=e.style;return(n=n||$e(e))&&(o=n.getPropertyValue(t)||n[t],a&&o&&(o=o.replace(P,"$1")||void 0),""!==o||pe(e)||(o=T.style(e,t)),!p.pixelBoxStyles()&&Ve.test(o)&&Ke.test(t)&&(r=l.width,i=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=o,o=n.width,l.width=r,l.minWidth=i,l.maxWidth=s)),void 0!==o?o+"":o}function Xe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function t(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",he.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);r="1%"!==t.top,l=12===n(t.marginLeft),u.style.right="60%",o=36===n(t.right),i=36===n(t.width),u.style.position="absolute",s=12===n(u.offsetWidth/3),he.removeChild(c),u=null}}function n(e){return Math.round(parseFloat(e))}var r,i,s,o,a,l,c=m.createElement("div"),u=m.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",p.clearCloneStyle="content-box"===u.style.backgroundClip,T.extend(p,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),o},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),s},reliableTrDimensions:function(){var t,n,r,i;return null==a&&(t=m.createElement("table"),n=m.createElement("tr"),r=m.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="border:1px solid",n.style.height="1px",r.style.height="9px",r.style.display="block",he.appendChild(t).appendChild(n).appendChild(r),i=e.getComputedStyle(n),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===n.offsetHeight,he.removeChild(t)),a}}))}();var Qe=["Webkit","Moz","ms"],Ze=m.createElement("div").style,et={};function tt(e){var t=T.cssProps[e]||et[e];return t||(e in Ze?e:et[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;n--;)if((e=Qe[n]+t)in Ze)return e}(e)||e)}var nt=/^(none|table(?!-c[ea]).+)/,rt={position:"absolute",visibility:"hidden",display:"block"},it={letterSpacing:"0",fontWeight:"400"};function st(e,t,n){var r=ue.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function ot(e,t,n,r,i,s){var o="width"===t?1:0,a=0,l=0,c=0;if(n===(r?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(c+=T.css(e,n+de[o],!0,i)),r?("content"===n&&(l-=T.css(e,"padding"+de[o],!0,i)),"margin"!==n&&(l-=T.css(e,"border"+de[o]+"Width",!0,i))):(l+=T.css(e,"padding"+de[o],!0,i),"padding"!==n?l+=T.css(e,"border"+de[o]+"Width",!0,i):a+=T.css(e,"border"+de[o]+"Width",!0,i));return!r&&s>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-l-a-.5))||0),l+c}function at(e,t,n){var r=$e(e),i=(!p.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,r),s=i,o=Je(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1);if(Ve.test(o)){if(!n)return o;o="auto"}return(!p.boxSizingReliable()&&i||!p.reliableTrDimensions()&&E(e,"tr")||"auto"===o||!parseFloat(o)&&"inline"===T.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===T.css(e,"boxSizing",!1,r),(s=a in e)&&(o=e[a])),(o=parseFloat(o)||0)+ot(e,t,n||(i?"border":"content"),s,r,o)+"px"}function lt(e,t,n,r,i){return new lt.prototype.init(e,t,n,r,i)}T.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Je(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,s,o,a=te(t),l=Ge.test(t),c=e.style;if(l||(t=tt(a)),o=T.cssHooks[t]||T.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(i=o.get(e,!1,r))?i:c[t];"string"===(s=typeof n)&&(i=ue.exec(n))&&i[1]&&(n=me(e,t,i),s="number"),null!=n&&n==n&&("number"!==s||l||(n+=i&&i[3]||(T.cssNumber[a]?"":"px")),p.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,r))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var i,s,o,a=te(t);return Ge.test(t)||(t=tt(a)),(o=T.cssHooks[t]||T.cssHooks[a])&&"get"in o&&(i=o.get(e,!0,n)),void 0===i&&(i=Je(e,t,r)),"normal"===i&&t in it&&(i=it[t]),""===n||n?(s=parseFloat(i),!0===n||isFinite(s)?s||0:i):i}}),T.each(["height","width"],(function(e,t){T.cssHooks[t]={get:function(e,n,r){if(n)return!nt.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?at(e,t,r):Ye(e,rt,(function(){return at(e,t,r)}))},set:function(e,n,r){var i,s=$e(e),o=!p.scrollboxSize()&&"absolute"===s.position,a=(o||r)&&"border-box"===T.css(e,"boxSizing",!1,s),l=r?ot(e,t,r,a,s):0;return a&&o&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(s[t])-ot(e,t,"border",!1,s)-.5)),l&&(i=ue.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),st(0,n,l)}}})),T.cssHooks.marginLeft=Xe(p.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Je(e,"marginLeft"))||e.getBoundingClientRect().left-Ye(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),T.each({margin:"",padding:"",border:"Width"},(function(e,t){T.cssHooks[e+t]={expand:function(n){for(var r=0,i={},s="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+de[r]+t]=s[r]||s[r-2]||s[0];return i}},"margin"!==e&&(T.cssHooks[e+t].set=st)})),T.fn.extend({css:function(e,t){return X(this,(function(e,t,n){var r,i,s={},o=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;o<i;o++)s[t[o]]=T.css(e,t[o],!1,r);return s}return void 0!==n?T.style(e,t,n):T.css(e,t)}),e,t,arguments.length>1)}}),T.Tween=lt,lt.prototype={constructor:lt,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(T.cssNumber[n]?"":"px")},cur:function(){var e=lt.propHooks[this.prop];return e&&e.get?e.get(this):lt.propHooks._default.get(this)},run:function(e){var t,n=lt.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):lt.propHooks._default.set(this),this}},lt.prototype.init.prototype=lt.prototype,lt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||!T.cssHooks[e.prop]&&null==e.elem.style[tt(e.prop)]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}},lt.propHooks.scrollTop=lt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=lt.prototype.init,T.fx.step={};var ct,ut,dt=/^(?:toggle|show|hide)$/,ht=/queueHooks$/;function pt(){ut&&(!1===m.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(pt):e.setTimeout(pt,T.fx.interval),T.fx.tick())}function ft(){return e.setTimeout((function(){ct=void 0})),ct=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=de[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function mt(e,t,n){for(var r,i=(vt.tweeners[t]||[]).concat(vt.tweeners["*"]),s=0,o=i.length;s<o;s++)if(r=i[s].call(n,t,e))return r}function vt(e,t,n){var r,i,s=0,o=vt.prefilters.length,a=T.Deferred().always((function(){delete l.elem})),l=function(){if(i)return!1;for(var t=ct||ft(),n=Math.max(0,c.startTime+c.duration-t),r=1-(n/c.duration||0),s=0,o=c.tweens.length;s<o;s++)c.tweens[s].run(r);return a.notifyWith(e,[c,r,n]),r<1&&o?n:(o||a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:ct||ft(),duration:n.duration,tweens:[],createTween:function(t,n){var r=T.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(!function(e,t){var n,r,i,s,o;for(n in e)if(i=t[r=te(n)],s=e[n],Array.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),(o=T.cssHooks[r])&&"expand"in o)for(n in s=o.expand(s),delete e[r],s)n in e||(e[n]=s[n],t[n]=i);else t[r]=i}(u,c.opts.specialEasing);s<o;s++)if(r=vt.prefilters[s].call(c,e,u,c.opts))return f(r.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return T.map(u,mt,c),f(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(vt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return me(n.elem,e,ue.exec(t),n),n}]},tweener:function(e,t){f(e)?(t=e,e=["*"]):e=e.match(z);for(var n,r=0,i=e.length;r<i;r++)n=e[r],vt.tweeners[n]=vt.tweeners[n]||[],vt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,s,o,a,l,c,u,d="width"in t||"height"in t,h=this,p={},f=e.style,g=e.nodeType&&ge(e),m=ie.get(e,"fxshow");for(r in n.queue||(null==(o=T._queueHooks(e,"fx")).unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,h.always((function(){h.always((function(){o.unqueued--,T.queue(e,"fx").length||o.empty.fire()}))}))),t)if(i=t[r],dt.test(i)){if(delete t[r],s=s||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}p[r]=m&&m[r]||T.style(e,r)}if((l=!T.isEmptyObject(t))||!T.isEmptyObject(p))for(r in d&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(c=m&&m.display)&&(c=ie.get(e,"display")),"none"===(u=T.css(e,"display"))&&(c?u=c:(ye([e],!0),c=e.style.display||c,u=T.css(e,"display"),ye([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===T.css(e,"float")&&(l||(h.done((function(){f.display=c})),null==c&&(u=f.display,c="none"===u?"":u)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",h.always((function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))),l=!1,p)l||(m?"hidden"in m&&(g=m.hidden):m=ie.access(e,"fxshow",{display:c}),s&&(m.hidden=!g),g&&ye([e],!0),h.done((function(){for(r in g||ye([e]),ie.remove(e,"fxshow"),p)T.style(e,r,p[r])}))),l=mt(g?m[r]:0,r,h),r in m||(m[r]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?vt.prefilters.unshift(e):vt.prefilters.push(e)}}),T.speed=function(e,t,n){var r=e&&"object"==typeof e?T.extend({},e):{complete:n||!n&&t||f(e)&&e,duration:e,easing:n&&t||t&&!f(t)&&t};return T.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in T.fx.speeds?r.duration=T.fx.speeds[r.duration]:r.duration=T.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){f(r.old)&&r.old.call(this),r.queue&&T.dequeue(this,r.queue)},r},T.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ge).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=T.isEmptyObject(e),s=T.speed(t,n,r),o=function(){var t=vt(this,T.extend({},e),s);(i||ie.get(this,"finish"))&&t.stop(!0)};return o.finish=o,i||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",s=T.timers,o=ie.get(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&ht.test(i)&&r(o[i]);for(i=s.length;i--;)s[i].elem!==this||null!=e&&s[i].queue!==e||(s[i].anim.stop(n),t=!1,s.splice(i,1));!t&&n||T.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=ie.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=T.timers,o=r?r.length:0;for(n.finish=!0,T.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),T.each(["toggle","show","hide"],(function(e,t){var n=T.fn[t];T.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(gt(t,!0),e,r,i)}})),T.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){T.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(ct=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),ct=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){ut||(ut=!0,pt())},T.fx.stop=function(){ut=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(t,n){return t=T.fx&&T.fx.speeds[t]||t,n=n||"fx",this.queue(n,(function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}}))},function(){var e=m.createElement("input"),t=m.createElement("select").appendChild(m.createElement("option"));e.type="checkbox",p.checkOn=""!==e.value,p.optSelected=t.selected,(e=m.createElement("input")).value="t",e.type="radio",p.radioValue="t"===e.value}();var _t,yt=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return X(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){T.removeAttr(this,e)}))}}),T.extend({attr:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===e.getAttribute?T.prop(e,t,n):(1===s&&T.isXMLDoc(e)||(i=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?_t:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=T.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!p.radioValue&&"radio"===t&&E(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(z);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),_t={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=yt[t]||T.find.attr;yt[t]=function(e,t,r){var i,s,o=t.toLowerCase();return r||(s=yt[o],yt[o]=i,i=null!=n(e,t,r)?o:null,yt[o]=s),i}}));var wt=/^(?:input|select|textarea|button)$/i,bt=/^(?:a|area)$/i;function Tt(e){return(e.match(z)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function Et(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(z)||[]}T.fn.extend({prop:function(e,t){return X(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[T.propFix[e]||e]}))}}),T.extend({prop:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&T.isXMLDoc(e)||(t=T.propFix[t]||t,i=T.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):wt.test(e.nodeName)||bt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),p.optSelected||(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){T.propFix[this.toLowerCase()]=this})),T.fn.extend({addClass:function(e){var t,n,r,i,s,o;return f(e)?this.each((function(t){T(this).addClass(e.call(this,t,Ct(this)))})):(t=Et(e)).length?this.each((function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(s=0;s<t.length;s++)i=t[s],n.indexOf(" "+i+" ")<0&&(n+=i+" ");o=Tt(n),r!==o&&this.setAttribute("class",o)}})):this},removeClass:function(e){var t,n,r,i,s,o;return f(e)?this.each((function(t){T(this).removeClass(e.call(this,t,Ct(this)))})):arguments.length?(t=Et(e)).length?this.each((function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(s=0;s<t.length;s++)for(i=t[s];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ");o=Tt(n),r!==o&&this.setAttribute("class",o)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,s,o=typeof e,a="string"===o||Array.isArray(e);return f(e)?this.each((function(n){T(this).toggleClass(e.call(this,n,Ct(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=Et(e),this.each((function(){if(a)for(s=T(this),i=0;i<n.length;i++)r=n[i],s.hasClass(r)?s.removeClass(r):s.addClass(r);else void 0!==e&&"boolean"!==o||((r=Ct(this))&&ie.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":ie.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+Tt(Ct(n))+" ").indexOf(t)>-1)return!0;return!1}});var xt=/\r/g;T.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=f(e),this.each((function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,T(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=T.map(i,(function(e){return null==e?"":e+""}))),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=T.valHooks[i.type]||T.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(xt,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:Tt(T.text(e))}},select:{get:function(e){var t,n,r,i=e.options,s=e.selectedIndex,o="select-one"===e.type,a=o?null:[],l=o?s+1:i.length;for(r=s<0?l:o?s:0;r<l;r++)if(((n=i[r]).selected||r===s)&&!n.disabled&&(!n.parentNode.disabled||!E(n.parentNode,"optgroup"))){if(t=T(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,s=T.makeArray(t),o=i.length;o--;)((r=i[o]).selected=T.inArray(T.valHooks.option.get(r),s)>-1)&&(n=!0);return n||(e.selectedIndex=-1),s}}}}),T.each(["radio","checkbox"],(function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},p.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var St=e.location,It={guid:Date.now()},kt=/\?/;T.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],n&&!r||T.error("Invalid XML: "+(r?T.map(r.childNodes,(function(e){return e.textContent})).join("\n"):t)),n};var Pt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(t,n,r,i){var s,o,a,l,c,d,h,p,v=[r||m],_=u.call(t,"type")?t.type:t,y=u.call(t,"namespace")?t.namespace.split("."):[];if(o=p=a=r=r||m,3!==r.nodeType&&8!==r.nodeType&&!Pt.test(_+T.event.triggered)&&(_.indexOf(".")>-1&&(y=_.split("."),_=y.shift(),y.sort()),c=_.indexOf(":")<0&&"on"+_,(t=t[T.expando]?t:new T.Event(_,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=y.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:T.makeArray(n,[t]),h=T.event.special[_]||{},i||!h.trigger||!1!==h.trigger.apply(r,n))){if(!i&&!h.noBubble&&!g(r)){for(l=h.delegateType||_,Pt.test(l+_)||(o=o.parentNode);o;o=o.parentNode)v.push(o),a=o;a===(r.ownerDocument||m)&&v.push(a.defaultView||a.parentWindow||e)}for(s=0;(o=v[s++])&&!t.isPropagationStopped();)p=o,t.type=s>1?l:h.bindType||_,(d=(ie.get(o,"events")||Object.create(null))[t.type]&&ie.get(o,"handle"))&&d.apply(o,n),(d=c&&o[c])&&d.apply&&ne(o)&&(t.result=d.apply(o,n),!1===t.result&&t.preventDefault());return t.type=_,i||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(v.pop(),n)||!ne(r)||c&&f(r[_])&&!g(r)&&((a=r[c])&&(r[c]=null),T.event.triggered=_,t.isPropagationStopped()&&p.addEventListener(_,Nt),r[_](),t.isPropagationStopped()&&p.removeEventListener(_,Nt),T.event.triggered=void 0,a&&(r[c]=a)),t.result}},simulate:function(e,t,n){var r=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(r,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each((function(){T.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}});var Ot=/\[\]$/,Lt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Rt=/^(?:input|select|textarea|keygen)/i;function Dt(e,t,n,r){var i;if(Array.isArray(t))T.each(t,(function(t,i){n||Ot.test(e)?r(e,i):Dt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==y(t))r(e,t);else for(i in t)Dt(e+"["+i+"]",t[i],n,r)}T.param=function(e,t){var n,r=[],i=function(e,t){var n=f(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,(function(){i(this.name,this.value)}));else for(n in e)Dt(n,e[n],t,i);return r.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&Rt.test(this.nodeName)&&!At.test(e)&&(this.checked||!Te.test(e))})).map((function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,(function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}})):{name:t.name,value:n.replace(Lt,"\r\n")}})).get()}});var Mt=/%20/g,Ft=/#.*$/,jt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ht=/^(?:GET|HEAD)$/,Ut=/^\/\//,Bt={},Wt={},zt="*/".concat("*"),Vt=m.createElement("a");function Gt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(z)||[];if(f(n))for(;r=s[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function $t(e,t,n,r){var i={},s=e===Wt;function o(a){var l;return i[a]=!0,T.each(e[a]||[],(function(e,a){var c=a(t,n,r);return"string"!=typeof c||s||i[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)})),l}return o(t.dataTypes[0])||!i["*"]&&o("*")}function Yt(e,t){var n,r,i=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&T.extend(!0,e,r),e}Vt.href=St.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:St.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Yt(Yt(e,T.ajaxSettings),t):Yt(T.ajaxSettings,e)},ajaxPrefilter:Gt(Bt),ajaxTransport:Gt(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,s,o,a,l,c,u,d,h,p=T.ajaxSetup({},n),f=p.context||p,g=p.context&&(f.nodeType||f.jquery)?T(f):T.event,v=T.Deferred(),_=T.Callbacks("once memory"),y=p.statusCode||{},w={},b={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!o)for(o={};t=qt.exec(s);)o[t[1].toLowerCase()+" "]=(o[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=o[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=b[e.toLowerCase()]=b[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==c&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)y[t]=[y[t],e[t]];return this},abort:function(e){var t=e||C;return r&&r.abort(t),x(0,t),this}};if(v.promise(E),p.url=((t||p.url||St.href)+"").replace(Ut,St.protocol+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(z)||[""],null==p.crossDomain){l=m.createElement("a");try{l.href=p.url,l.href=l.href,p.crossDomain=Vt.protocol+"//"+Vt.host!=l.protocol+"//"+l.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=T.param(p.data,p.traditional)),$t(Bt,p,n,E),c)return E;for(d in(u=T.event&&p.global)&&0==T.active++&&T.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Ht.test(p.type),i=p.url.replace(Ft,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Mt,"+")):(h=p.url.slice(i.length),p.data&&(p.processData||"string"==typeof p.data)&&(i+=(kt.test(i)?"&":"?")+p.data,delete p.data),!1===p.cache&&(i=i.replace(jt,"$1"),h=(kt.test(i)?"&":"?")+"_="+It.guid+++h),p.url=i+h),p.ifModified&&(T.lastModified[i]&&E.setRequestHeader("If-Modified-Since",T.lastModified[i]),T.etag[i]&&E.setRequestHeader("If-None-Match",T.etag[i])),(p.data&&p.hasContent&&!1!==p.contentType||n.contentType)&&E.setRequestHeader("Content-Type",p.contentType),E.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+zt+"; q=0.01":""):p.accepts["*"]),p.headers)E.setRequestHeader(d,p.headers[d]);if(p.beforeSend&&(!1===p.beforeSend.call(f,E,p)||c))return E.abort();if(C="abort",_.add(p.complete),E.done(p.success),E.fail(p.error),r=$t(Wt,p,n,E)){if(E.readyState=1,u&&g.trigger("ajaxSend",[E,p]),c)return E;p.async&&p.timeout>0&&(a=e.setTimeout((function(){E.abort("timeout")}),p.timeout));try{c=!1,r.send(w,x)}catch(e){if(c)throw e;x(-1,e)}}else x(-1,"No Transport");function x(t,n,o,l){var d,h,m,w,b,C=n;c||(c=!0,a&&e.clearTimeout(a),r=void 0,s=l||"",E.readyState=t>0?4:0,d=t>=200&&t<300||304===t,o&&(w=function(e,t,n){for(var r,i,s,o,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){l.unshift(i);break}if(l[0]in n)s=l[0];else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){s=i;break}o||(o=i)}s=s||o}if(s)return s!==l[0]&&l.unshift(s),n[s]}(p,E,o)),!d&&T.inArray("script",p.dataTypes)>-1&&T.inArray("json",p.dataTypes)<0&&(p.converters["text script"]=function(){}),w=function(e,t,n,r){var i,s,o,a,l,c={},u=e.dataTypes.slice();if(u[1])for(o in e.converters)c[o.toLowerCase()]=e.converters[o];for(s=u.shift();s;)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=s,s=u.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(!(o=c[l+" "+s]||c["* "+s]))for(i in c)if((a=i.split(" "))[1]===s&&(o=c[l+" "+a[0]]||c["* "+a[0]])){!0===o?o=c[i]:!0!==c[i]&&(s=a[0],u.unshift(a[1]));break}if(!0!==o)if(o&&e.throws)t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+l+" to "+s}}}return{state:"success",data:t}}(p,w,E,d),d?(p.ifModified&&((b=E.getResponseHeader("Last-Modified"))&&(T.lastModified[i]=b),(b=E.getResponseHeader("etag"))&&(T.etag[i]=b)),204===t||"HEAD"===p.type?C="nocontent":304===t?C="notmodified":(C=w.state,h=w.data,d=!(m=w.error))):(m=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",d?v.resolveWith(f,[h,C,E]):v.rejectWith(f,[E,C,m]),E.statusCode(y),y=void 0,u&&g.trigger(d?"ajaxSuccess":"ajaxError",[E,p,d?h:m]),_.fireWith(f,[E,C]),u&&(g.trigger("ajaxComplete",[E,p]),--T.active||T.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],(function(e,t){T[t]=function(e,n,r,i){return f(n)&&(i=i||r,r=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:i,data:n,success:r},T.isPlainObject(e)&&e))}})),T.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),T._evalUrl=function(e,t,n){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t,n)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(f(e)&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return f(e)?this.each((function(t){T(this).wrapInner(e.call(this,t))})):this.each((function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=f(e);return this.each((function(n){T(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){T(this).replaceWith(this.childNodes)})),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Kt={0:200,1223:204},Jt=T.ajaxSettings.xhr();p.cors=!!Jt&&"withCredentials"in Jt,p.ajax=Jt=!!Jt,T.ajaxTransport((function(t){var n,r;if(p.cors||Jt&&!t.crossDomain)return{send:function(i,s){var o,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(o,i[o]);n=function(e){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(Kt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout((function(){n&&r()}))},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}})),T.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),T.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),m.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Xt,Qt=[],Zt=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Qt.pop()||T.expando+"_"+It.guid++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",(function(t,n,r){var i,s,o,a=!1!==t.jsonp&&(Zt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=f(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Zt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return o||T.error(i+" was not called"),o[0]},t.dataTypes[0]="json",s=e[i],e[i]=function(){o=arguments},r.always((function(){void 0===s?T(e).removeProp(i):e[i]=s,t[i]&&(t.jsonpCallback=n.jsonpCallback,Qt.push(i)),o&&f(s)&&s(o[0]),o=s=void 0})),"script"})),p.createHTMLDocument=((Xt=m.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Xt.childNodes.length),T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(p.createHTMLDocument?((r=(t=m.implementation.createHTMLDocument("")).createElement("base")).href=m.location.href,t.head.appendChild(r)):t=m),s=!n&&[],(i=F.exec(e))?[t.createElement(i[1])]:(i=Pe([e],t,s),s&&s.length&&T(s).remove(),T.merge([],i.childNodes)));var r,i,s},T.fn.load=function(e,t,n){var r,i,s,o=this,a=e.indexOf(" ");return a>-1&&(r=Tt(e.slice(a)),e=e.slice(0,a)),f(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),o.length>0&&T.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){s=arguments,o.html(r?T("<div>").append(T.parseHTML(e)).find(r):e)})).always(n&&function(e,t){o.each((function(){n.apply(this,s||[e.responseText,t,e])}))}),this},T.expr.pseudos.animated=function(e){return T.grep(T.timers,(function(t){return e===t.elem})).length},T.offset={setOffset:function(e,t,n){var r,i,s,o,a,l,c=T.css(e,"position"),u=T(e),d={};"static"===c&&(e.style.position="relative"),a=u.offset(),s=T.css(e,"top"),l=T.css(e,"left"),("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1?(o=(r=u.position()).top,i=r.left):(o=parseFloat(s)||0,i=parseFloat(l)||0),f(t)&&(t=t.call(e,n,T.extend({},a))),null!=t.top&&(d.top=t.top-a.top+o),null!=t.left&&(d.left=t.left-a.left+i),"using"in t?t.using.call(e,d):u.css(d)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){T.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===T.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),i.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-T.css(r,"marginTop",!0),left:t.left-i.left-T.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||he}))}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;T.fn[e]=function(r){return X(this,(function(e,r,i){var s;if(g(e)?s=e:9===e.nodeType&&(s=e.defaultView),void 0===i)return s?s[t]:e[r];s?s.scrollTo(n?s.pageXOffset:i,n?i:s.pageYOffset):e[r]=i}),e,r,arguments.length)}})),T.each(["top","left"],(function(e,t){T.cssHooks[t]=Xe(p.pixelPosition,(function(e,n){if(n)return n=Je(e,t),Ve.test(n)?T(e).position()[t]+"px":n}))})),T.each({Height:"height",Width:"width"},(function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){T.fn[r]=function(i,s){var o=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===s?"margin":"border");return X(this,(function(t,n,i){var s;return g(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===i?T.css(t,n,a):T.style(t,n,i,a)}),t,o?i:void 0,o)}}))})),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){T.fn[t]=function(e){return this.on(t,e)}})),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;T.proxy=function(e,t){var n,r,s;if("string"==typeof t&&(n=e[t],t=e,e=n),f(e))return r=i.call(arguments,2),s=function(){return e.apply(t||this,r.concat(i.call(arguments)))},s.guid=e.guid=e.guid||T.guid++,s},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=E,T.isFunction=f,T.isWindow=g,T.camelCase=te,T.type=y,T.now=Date.now,T.isNumeric=function(e){var t=T.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},T.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],(function(){return T}));var tn=e.jQuery,nn=e.$;return T.noConflict=function(t){return e.$===T&&(e.$=nn),t&&e.jQuery===T&&(e.jQuery=tn),T},void 0===t&&(e.jQuery=e.$=T),T}))})),s.register("bRxOZ",(function(t,n){e(t.exports,"app",(function(){return r})),s("fkNhc");const r=(0,s("MjY8E").initializeApp)({apiKey:"AIzaSyC-f08qD6BqdVE49Fk1Hrhnb18ww-swp9s",authDomain:"blended1-js-project.firebaseapp.com",databaseURL:"https://blended1-js-project-default-rtdb.europe-west1.firebasedatabase.app",projectId:"blended1-js-project",storageBucket:"blended1-js-project.appspot.com",messagingSenderId:"453737683945",appId:"1:453737683945:web:0c3c25fcb2a4883929c978",measurementId:"G-93VBB2L2Q1"})})),s.register("fkNhc",(function(t,n){e(t.exports,"initializeApp",(function(){return s("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return s("MjY8E").registerVersion}));s("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s("MjY8E").registerVersion)("firebase","9.22.0","app")})),s.register("gBQDP",(function(t,n){e(t.exports,"initialCartCounter",(function(){return o})),e(t.exports,"initialCartCounterBackup",(function(){return a})),e(t.exports,"closingCartCounter",(function(){return l})),e(t.exports,"cartCounter",(function(){return c}));var r=s("lRSMh");document.querySelector(".page-nav__cart-number");const i=document.querySelectorAll(".page-nav__cart-number");function o(){localStorage.getItem("userShoppingListCounter")&&i.forEach((e=>{e.textContent=JSON.parse(localStorage.getItem("userShoppingListCounter")),JSON.parse(localStorage.getItem("userShoppingListCounter"))&&e.classList.remove("visually-hidden")}))}function a(){r.default.shoppingList().length&&i.forEach((e=>{e.textContent=r.default.shoppingList().length,e.classList.remove("visually-hidden")}))}function l(){i.forEach((e=>{e.classList.add("visually-hidden")}))}function c(){r.default.shoppingList().length?i.forEach((e=>{e.textContent=r.default.shoppingList().length,e.classList.remove("visually-hidden")})):i.forEach((e=>{e.textContent="",e.classList.add("visually-hidden")}))}})),s.register("gQOBw",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return s("G0OFq").a8})),e(t.exports,"getAuth",(function(){return s("G0OFq").o})),e(t.exports,"onAuthStateChanged",(function(){return s("G0OFq").x})),e(t.exports,"signInWithEmailAndPassword",(function(){return s("G0OFq").a9})),e(t.exports,"signOut",(function(){return s("G0OFq").B})),e(t.exports,"updateEmail",(function(){return s("G0OFq").aj})),e(t.exports,"updatePassword",(function(){return s("G0OFq").ak})),e(t.exports,"updateProfile",(function(){return s("G0OFq").ai})),s("eMcUM")})),s.register("eMcUM",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return s("G0OFq").a8})),e(t.exports,"getAuth",(function(){return s("G0OFq").o})),e(t.exports,"onAuthStateChanged",(function(){return s("G0OFq").x})),e(t.exports,"signInWithEmailAndPassword",(function(){return s("G0OFq").a9})),e(t.exports,"signOut",(function(){return s("G0OFq").B})),e(t.exports,"updateEmail",(function(){return s("G0OFq").aj})),e(t.exports,"updatePassword",(function(){return s("G0OFq").ak})),e(t.exports,"updateProfile",(function(){return s("G0OFq").ai}));s("G0OFq");s("2xDiJ"),s("MjY8E"),s("kZfxc"),s("6ExWU")})),s.register("G0OFq",(function(t,n){e(t.exports,"a8",(function(){return Ye})),e(t.exports,"a9",(function(){return Ke})),e(t.exports,"ai",(function(){return Je})),e(t.exports,"aj",(function(){return Xe})),e(t.exports,"ak",(function(){return Qe})),e(t.exports,"x",(function(){return et})),e(t.exports,"B",(function(){return tt})),e(t.exports,"o",(function(){return wn}));var r=s("2xDiJ"),i=s("MjY8E"),o=s("4tSb9"),a=s("kZfxc"),l=s("6ExWU");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,d=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),h=new(0,a.Logger)("@firebase/auth");function p(e,...t){h.logLevel<=a.LogLevel.ERROR&&h.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw v(e,...t)}function g(e,...t){return v(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n});return new(0,r.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function v(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return d.create(e,...t)}function _(e,t,...n){if(!e)throw v(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw p(t),new Error(t)}function w(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(T()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},k=new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,n,i,s={}){return O(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),S.fetch()(A(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function O(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},I),t);try{const t=new R(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw D(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw D(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw D(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw D(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(t){if(t instanceof r.FirebaseError)throw t;f(e,"network-request-failed",{message:String(t)})}}async function L(e,t,n,r,i={}){const s=await N(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function A(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?x(e.config,i):`${e.config.apiScheme}://${i}`}class R{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),k.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return 1e3*Number(e)}function j(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return p("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.base64Decode)(n);return e?JSON.parse(e):(p("Failed to decode base64 JWT payload"),null)}catch(e){return p("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function q(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class H{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=M(this.lastLoginAt),this.creationTime=M(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e){var t;const n=e.auth,r=await e.getIdToken(),i=await q(e,async function(e,t){return N(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));_(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,o.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const l=(c=e.providerData,u=a,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const d=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==l?void 0:l.length)),p=!!d&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new U(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(void 0!==e.idToken,"internal-error"),_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=j(e);return _(t,"internal-error"),_(void 0!==t.exp,"internal-error"),_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await O(e,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=A(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",S.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new W;return n&&(_("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new W,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class V{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,o.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new U(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,r.getModularInstance)(e),i=await n.getIdToken(t),s=j(i);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:M(F(s.auth_time)),issuedAtTime:M(F(s.iat)),expirationTime:M(F(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,r.getModularInstance)(e);await B(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new V(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await B(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,async function(e,t){return N(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:T,stsTokenManager:C}=t;_(y&&C,e,"internal-error");const E=W.fromJSON(this.name,C);_("string"==typeof y,e,"internal-error"),z(u,e.name),z(d,e.name),_("boolean"==typeof w,e,"internal-error"),_("boolean"==typeof b,e,"internal-error"),z(h,e.name),z(p,e.name),z(f,e.name),z(g,e.name),z(m,e.name),z(v,e.name);const x=new V({uid:y,auth:e,email:d,emailVerified:w,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:E,createdAt:m,lastLoginAt:v});return T&&Array.isArray(T)&&(x.providerData=T.map((e=>Object.assign({},e)))),g&&(x._redirectEventId=g),x}static async _fromIdTokenResponse(e,t,n=!1){const r=new W;r.updateFromServerResponse(t);const i=new V({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await B(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new Map;function $(e){w(e instanceof Function,"Expected a class definition");let t=G.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,G.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Y.type="NONE";const K=Y;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,n){return`firebase:${e}:${t}:${n}`}class X{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=J(this.userKey,r.apiKey,i),this.fullPersistenceKey=J("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?V._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new X($(K),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||$(K);const s=J(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=V._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new X(i,e,n)):new X(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ne(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Z(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ie(t))return"Blackberry";if(se(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||te(t))&&!t.includes("edge/"))return"Chrome";if(re(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Z(e=(0,r.getUA)()){return/firefox\//i.test(e)}function ee(e=(0,r.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function te(e=(0,r.getUA)()){return/crios\//i.test(e)}function ne(e=(0,r.getUA)()){return/iemobile/i.test(e)}function re(e=(0,r.getUA)()){return/android/i.test(e)}function ie(e=(0,r.getUA)()){return/blackberry/i.test(e)}function se(e=(0,r.getUA)()){return/webos/i.test(e)}function oe(e=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ae(e=(0,r.getUA)()){return oe(e)||re(e)||se(e)||ie(e)||/windows phone/i.test(e)||ne(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e,t=[]){let n;switch(e){case"Browser":n=Q((0,r.getUA)());break;case"Worker":n=`${Q((0,r.getUA)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){return N(e,"GET","/v2/recaptchaConfig",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){return void 0!==e&&void 0!==e.enterprise}class de{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function pe(e){return`__${e}${Math.floor(1e6*Math.random())}`}class fe{constructor(e){this.type="recaptcha-enterprise",this.auth=_e(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;ue(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{ce(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new de(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&ue(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));he("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function ge(e,t,n,r=!1){const i=new fe(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ye(this),this.idTokenSubscription=new ye(this),this.beforeStateQueue=new me(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await X.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await B(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.getModularInstance)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence($(e))}))}async initializeRecaptchaConfig(){const e=await ce(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new de(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new fe(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await X.create(this,[$(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){h.logLevel<=a.LogLevel.WARN&&h.warn(`Auth (${i.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function _e(e){return(0,r.getModularInstance)(e)}class ye{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.createSubscribe)((e=>this.observer=e))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t,n){const r=_e(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=be(t),{host:o,port:a}=function(e){const t=be(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Te(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Te(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function be(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Te(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ce{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(e,t){return N(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends Ce{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Se(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Se(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await ge(e,n,"signInWithPassword");return xe(e,t)}return xe(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await ge(e,n,"signInWithPassword");return xe(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Ce{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,o.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ke(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ie(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ie(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ie(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.querystring)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne extends Ce{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ne({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ne({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw D(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Pe)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ne({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){var t,n,i,s,o,a;const l=(0,r.querystringDecode)((0,r.extractQuerystring)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(n=l.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=l.mode)&&void 0!==i?i:null);_(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).link,n=t?(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id:null,i=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id;return(i?(0,r.querystringDecode)((0,r.extractQuerystring)(i)).link:null)||i||n||t||e}(e);try{return new Oe(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{constructor(){this.providerId=Le.PROVIDER_ID}static credential(e,t){return Se._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Oe.parseLink(t);return _(n,"argument-error"),Se._fromEmailAndCode(e,n.code,n.tenantId)}}Le.PROVIDER_ID="password",Le.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Le.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Ae{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De extends Re{constructor(){super("facebook.com")}static credential(e){return ke._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch(e){return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com",De.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me extends Re{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ke._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Me.credential(t,n)}catch(e){return null}}}Me.GOOGLE_SIGN_IN_METHOD="google.com",Me.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe extends Re{constructor(){super("github.com")}static credential(e){return ke._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch(e){return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com",Fe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je extends Re{constructor(){super("twitter.com")}static credential(e,t){return ke._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return je.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qe(e,t){return L(e,"POST","/v1/accounts:signUp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je.TWITTER_SIGN_IN_METHOD="twitter.com",je.PROVIDER_ID="twitter.com";class He{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await V._fromIdTokenResponse(e,n,r),s=Ue(n);return new He({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ue(n);return new He({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ue(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be extends r.FirebaseError{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Be.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Be(e,t,n,r)}}function We(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Be._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t,n=!1){const r=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return He._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ve(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await q(e,We(r,i,t,e),n);_(s.idToken,r,"internal-error");const o=j(s.idToken);_(o,r,"internal-error");const{sub:a}=o;return _(e.uid===a,r,"user-mismatch"),He._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&f(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t,n=!1){const r="signIn",i=await We(e,r,t),s=await He._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function $e(e,t){return Ge(_e(e),t)}async function Ye(e,t,n){var r;const i=_e(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await ge(i,s,"signUpPassword");o=qe(i,e)}else o=qe(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await ge(i,s,"signUpPassword");return qe(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await He._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Ke(e,t,n){return $e((0,r.getModularInstance)(e),Le.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Je(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.getModularInstance)(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await q(i,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return N(e,"POST","/v1/accounts:update",t)}(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Xe(e,t){return Ze((0,r.getModularInstance)(e),t,null)}function Qe(e,t){return Ze((0,r.getModularInstance)(e),null,t)}async function Ze(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await q(e,Ee(r,i));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,t,n,i){return(0,r.getModularInstance)(e).onAuthStateChanged(t,n,i)}function tt(e){return(0,r.getModularInstance)(e).signOut()}new WeakMap;const nt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nt,"1"),this.storage.removeItem(nt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends rt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,r.getUA)();return ee(e)||oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}it.type="LOCAL";const st=it;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends rt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ot.type="SESSION";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new lt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt.receivers=[];class ut{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=ct("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(){return void 0!==dt().WorkerGlobalScope&&"function"==typeof dt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt="firebaseLocalStorageDb",ft="firebaseLocalStorage",gt="fbase_key";class mt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function vt(e,t){return e.transaction([ft],t?"readwrite":"readonly").objectStore(ft)}function _t(){const e=indexedDB.open(pt,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ft,{keyPath:gt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ft)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(pt);return new mt(e).toPromise()}(),t(await _t()))}))}))}async function yt(e,t,n){const r=vt(e,!0).put({[gt]:t,value:n});return new mt(r).toPromise()}function wt(e,t){const n=vt(e,!0).delete(t);return new mt(n).toPromise()}class bt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _t()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ht()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lt._getInstance(ht()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ut(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _t();return await yt(e,nt,"1"),await wt(e,nt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>yt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=vt(e,!1).get(t),r=await new mt(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>wt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=vt(e,!1).getAll();return new mt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bt.type="LOCAL";const Tt=bt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
pe("rcb"),new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct="recaptcha";async function Et(e,t,n){var r;const i=await n.verify();try{let s;if(_("string"==typeof i,e,"argument-error"),_(n.type===Ct,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,e,"missing-multi-factor-info");const o=await function(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(e){this.providerId=xt.PROVIDER_ID,this.auth=_e(e)}verifyPhoneNumber(e,t){return Et(this.auth,e,(0,r.getModularInstance)(t))}static credential(e,t){return Ne._fromVerification(e,t)}static credentialFromResult(e){const t=e;return xt.credentialFromTaggedObject(t)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ne._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function St(e,t){return t?$(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.PROVIDER_ID="phone",xt.PHONE_SIGN_IN_METHOD="phone";class It extends Ce{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ie(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ie(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ie(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kt(e){return Ge(e.auth,new It(e),e.bypassAuthState)}function Pt(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Ve(n,new It(e),e.bypassAuthState)}async function Nt(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),ze(n,new It(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kt;case"linkViaPopup":case"linkViaRedirect":return Nt;case"reauthViaPopup":case"reauthViaRedirect":return Pt;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new E(2e3,1e4);class At extends Ot{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=ct();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Lt.get())};e()}}At.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt="pendingRedirect",Dt=new Map;class Mt extends Ot{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Dt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=qt(t),r=jt(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Dt.set(this.auth._key(),e)}return this.bypassAuthState||Dt.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ft(e,t){Dt.set(e._key(),t)}function jt(e){return $(e._redirectPersistence)}function qt(e){return J(Rt,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e,t,n=!1){const r=_e(e),i=St(r,t),s=new Mt(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ut{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Wt(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bt(e))}saveEventToCache(e){this.cachedEventUids.add(Bt(e)),this.lastProcessedEventTime=Date.now()}}function Bt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Wt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vt=/^https?/;async function Gt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return N(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if($t(e))return}catch(e){}f(e,"unauthorized-domain")}function $t(e){const t=b(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Vt.test(n))return!1;if(zt.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new E(3e4,6e4);function Kt(){const e=dt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Jt=null;function Xt(e){return Jt=Jt||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Kt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kt(),n(g(e,"network-request-failed"))},timeout:Yt.get()})}if(null===(i=null===(r=dt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=dt().gapi)||void 0===s?void 0:s.load)){const t=pe("iframefcb");return dt()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},he(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Jt=null,e}))}(e),Jt}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new E(5e3,15e3),Zt="__/auth/iframe",en="emulator/auth/iframe",tn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rn(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,en):`https://${e.config.authDomain}/${Zt}`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},o=nn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.querystring)(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class on{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function an(e,t,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},sn),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.getUA)().toLowerCase();n&&(l=te(u)?"_blank":n),Z(u)&&(t=t||"http://localhost",c.scrollbars="yes");const d=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,r.getUA)()){var t;return oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==l)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",l),new on(null);const h=window.open(t||"",l,d);_(h,e,"popup-blocked");try{h.focus()}catch(e){}return new on(h)}const ln="__/auth/handler",cn="emulator/auth/handler",un=encodeURIComponent("fac");async function dn(e,t,n,s,o,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(t instanceof Ae){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Re){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];const u=await e._getAppCheckToken(),d=u?`#${un}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?x(e,cn):`https://${e.authDomain}/${ln}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,r.querystring)(c).slice(1)}${d}`}const hn="webStorageSupport";const pn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=at,this._completeRedirectFn=Ht,this._overrideRedirectResult=Ft}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return an(e,await dn(e,t,n,b(),r),ct())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){dt().location.href=e}(await dn(e,t,n,b(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Xt(e),n=dt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:rn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=dt().setTimeout((()=>{r(i)}),Qt.get());function o(){dt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Ut(e);return t.register("authEvent",(t=>{_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hn,{type:hn},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[hn];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ae()||ee()||oe()}};var fn="@firebase/auth",gn="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=(0,r.getExperimentalSetting)("authIdTokenMaxAge")||300;let _n=null;const yn=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vn)return;const i=null==n?void 0:n.token;_n!==i&&(_n=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wn(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,i._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.deepEqual)(i,null!=t?t:{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:pn,persistence:[Tt,st,at]}),s=(0,r.getExperimentalSetting)("authTokenSyncURL");if(s){const e=yn(s);!function(e,t,n){(0,r.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){(0,r.getModularInstance)(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}const o=(0,r.getDefaultEmulatorHost)("auth");return o&&we(n,`http://${o}`),n}var bn;bn="Browser",(0,i._registerComponent)(new(0,l.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;_(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:bn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:le(bn)},l=new ve(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map($);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,i._registerComponent)(new(0,l.Component)("auth-internal",(e=>(e=>new mn(e))(_e(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(fn,gn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(bn)),(0,i.registerVersion)(fn,gn,"esm2017")})),s.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),s.register("2yFaI",(function(t,r){e(t.exports,"initialShoppingList",(function(){return f}));var i=s("lRSMh"),o=s("1VFfL"),a=s("eZig4");let l,c,u,d,h=1;const p=matchMedia("(max-width: 767px)");function f(){l=i.default.shoppingList().length,p.matches?(c=4,u=2,v(),(0,a.renderCurrentBookCards)(g(1,c))):(c=3,u=3,_(),(0,a.renderCurrentBookCards)(g(1,c)))}function g(e,t){const n=i.default.shoppingList().filter(((e,n)=>n>=h*t-t&&n<=h*t-1));if(n.length)return n;if(h-=1,l=i.default.shoppingList().length,0===h)return void document.querySelector(".js-plug")?.classList.remove("visually-hidden");m({totalItmes:l,itemsPerPage:t,visiblePages:u,page:h});return i.default.shoppingList().filter(((e,n)=>n>=h*t-t&&n<=h*t-1))}function m({totalItmes:e,itemsPerPage:t,visiblePages:r,page:i}){const s=document.querySelector(".paginator-container");if(s){e>t&&s.classList.remove("visually-hidden");const l={usageStatistics:!1,totalItems:e,itemsPerPage:t,visiblePages:r,page:i,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new(n(o))(s,l).on("afterMove",(e=>{h=e.page;const n=g(e.page,t);(0,a.renderCurrentBookCards)(n)})),e<=t&&s.classList.add("visually-hidden")}}function v(){m({totalItmes:l,itemsPerPage:c,visiblePages:u,page:h})}function _(){m({totalItmes:l,itemsPerPage:c,visiblePages:u,page:h})}p.addEventListener("change",(e=>{e.matches?(c=4,u=2,d=Math.ceil(l/c),h>d&&(h=d),v(),(0,a.renderCurrentBookCards)(g(1,4)),d=Math.ceil(l/c)):(c=3,u=3,_(),(0,a.renderCurrentBookCards)(g(1,3)),d=Math.ceil(l/c))})),document.body.addEventListener("click",(e=>{e.target.classList.contains("js-shopping-list-delete-button")&&(i.default.setShoppingList(i.default.shoppingList().filter((t=>t._id!==e.target.dataset.cardId))),l=i.default.shoppingList().length,localStorage.setItem("userShoppingListCounter",i.default.shoppingList().length),m({totalItmes:l,itemsPerPage:c,visiblePages:u,page:h}),(0,a.renderCurrentBookCards)(g(h,c)))}))})),s.register("1VFfL",(function(e,t){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e,t){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){"use strict";e.exports=function(e){return void 0===e}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Array}},function(e,t,n){"use strict";var r=n(2),i=n(17),s=n(6);e.exports=function(e,t,n){r(e)?i(e,t,n):s(e,t,n)}},function(e,t,n){"use strict";e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Function}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){"use strict";var r=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){var i,s;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,i=n;n>=0&&i<s;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){"use strict";var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=s(e)?e(t):r(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){"use strict";n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){"use strict";var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=i({init:function(e,t){this._options=s({},c,t),this._currentPage=0,this._view=new a(e,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),i=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=r>1,t.nextMore=r<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(s/2),(n=(t=Math.max(e-r,1))+s-1)>i&&(t=Math.max(i-s+1,1),n=i)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(u),e.exports=u},function(e,t,n){"use strict";var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),l=n(5),c=n(3),u=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(e){r(e.prototype,d.prototype)},d.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},d.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},d.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},d.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},d.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},d.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},d.prototype.on=function(e,t,n){var r=this;s(e)?(e=e.split(u),c(e,(function(e){r._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){r.on(t,e,n)})))},d.prototype.once=function(e,t,n){var r=this;if(o(e))return n=t,void c(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},d.prototype._spliceMatches=function(e,t){var n,r=0;if(a(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},d.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},d.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},d.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var i=e===r.handler,s=t===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},d.prototype._offByEventName=function(e,t){var n=this,r=l(t),i=n._matchHandler(t);e=e.split(u),c(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,i):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},d.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},d.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?c(e,(function(e,t){r.off(t,e)})):s(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):l(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},d.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?l(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},d.prototype.fire=function(e){this.invoke.apply(this,arguments)},d.prototype.invoke=function(e){var t,n,r,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1;r+=1}return!0},d.prototype.hasListener=function(e){return this.getListenerLength(e)>0},d.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=d},function(e,t,n){"use strict";var r=n(1),i=n(15);e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){"use strict";e.exports=function(e){return null===e}},function(e,t,n){"use strict";e.exports=function(e){return e===Object(e)}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r=0,i=e.length;for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){"use strict";var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){"use strict";e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){"use strict";var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),l=n(25),c=n(0),u=n(4),d=n(28),h=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},f=["first","prev","next","last"],g=["prev","next"],m=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},p,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!d(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(f,(function(e){this._buttons[e]=h.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(f,(function(e){var t="disabled"+h.capitalizeFirstLetter(e);this._buttons[t]=h.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(g,(function(e){var t=e+"More";this._buttons[t]=h.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,l(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,l(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,i=e.rightPageNumber;for(n=r;n<=i;n+=1)n===e.page?t=h.createElementByTemplate(this._template.currentPage,{page:n}):(t=h.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||l(t,this._firstItemClassName),n!==i||e.nextMore||l(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,r,i=s(t);a(t),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!h.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],h.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=m},function(e,t,n){"use strict";e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){"use strict";var r=n(4),i=n(3),s=n(23);function o(e,t,n,r){function o(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,r){var o=s(e,t),a=!1;i(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(e,t,n,o)}e.exports=function(e,t,n,s){r(t)?i(t.split(/\s+/g),(function(t){o(e,t,n,s)})):i(t,(function(t,r){o(e,r,t,n)}))}},function(e,t,n){"use strict";var r="_feEventKey";e.exports=function(e,t){var n,i=e[r];return i||(i=e[r]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){"use strict";var r=n(3),i=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,l=[];a?r(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,l)<0&&l.push(e)})),o(e,l))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){"use strict";var r=n(2),i=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){"use strict";var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,p=/^["']\w+["']$/,f=/"|'/g,g=/^-?\d+\.?\d*$/,m=2,v={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],s=0,o=0;return i(t,(function(e,i){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(o,i)),o=i+1)})),r.push(t.slice(o)),{exps:n,sourcesInsideIf:r}}(e,t),s=!1,o="";return i(r.exps,(function(e,t){return(s=b(e,n))&&(o=T(r.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var r=b(e,n),o=s(r)?"@index":"@key",l={},c="";return i(r,(function(e,r){l[o]=r,l["@this"]=e,a(n,l),c+=T(t.slice(),n)})),c},with:function(e,t,n){var i=r("as",e),s=e[i+1],o=b(e.slice(0,i),n),l={};return l[s]=o,T(t,a(n,l))||""}},_=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,i=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,i.push(e.slice(s,r)),s=r+n[0].length,n=t.exec(e);return i.push(e.slice(s)),i};function y(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:p.test(e)?r=e.replace(f,""):c.test(e)?r=y((n=e.split(u))[0],t)[y(n[1],t)]:d.test(e)?r=y((n=e.split(h))[0],t)[n[1]]:g.test(e)&&(r=parseFloat(e)),r}function w(e,t,n){for(var r,i,s,a,l=v[e],c=1,u=0+m,d=t[u];c&&o(d);)0===d.indexOf(e)?c+=1:0===d.indexOf("/"+e)&&(c-=1,r=u),d=t[u+=m];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=l(t[0].split(" ").slice(1),(i=0,s=r,(a=t.splice(i+1,s-i)).pop(),a),n),t}function b(e,t){var n=y(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return i(t,(function(e){r.push(y(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function T(e,t){for(var n,r,i,s=1,a=e[s];o(a);)r=(n=a.split(" "))[0],v[r]?(i=w(r,e.splice(s,e.length-s),t),e=e.concat(i)):e[s]=b(n,t),a=e[s+=m];return e.join("")}e.exports=function(e,t){return T(_(e,l),t)}},function(e,t,n){"use strict";var r=n(1),i=n(31),s=6048e5;e.exports=function(e,t){var n=location.hostname,o="TOAST UI "+e+" for "+n+": Statistics",a=window.localStorage.getItem(o);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(e){return(new Date).getTime()-e>s}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},e.exports=n()})),s.register("eZig4",(function(t,n){e(t.exports,"renderCurrentBookCards",(function(){return i}));var r=s("fzETK");function i(e){const t=document.querySelector(".js-shopping-list");if(t)if(e){const n=e.map((e=>(0,r.createMarkup)(e))).join("");t.innerHTML=n}else t.innerHTML='<div class="plug"><p class="plug__text">This page is empty, add some books and proceed to order.</p><div class="plug__img"></div></div>'}})),s.register("fzETK",(function(t,r){e(t.exports,"createMarkup",(function(){return d})),s("a0DK1");var i=s("gJ9wI"),o=s("1a70O"),a=s("aJr22"),l=s("hY2xG"),c=s("cXH47"),u=s("7d2cy");function d(e){return`<li class="card js-card" data-card-id="${e._id}">\n  <div class="card__img-thumb">\n    <img\n      class="card__img"\n      src="${e.book_image}"\n      alt="${e.title} book cover"\n    />\n  </div>\n  <div\n    tabindex="0"\n    type="button"\n    class="card__delete-btn js-remove-btn"\n    data-remove-btn-id="${e._id}"\n  >\n  <button type="button" class='js-shopping-list-delete-button' data-card-id="${e._id}" aria-label="delete button">\n  <span class="delete-btn__icon"></span>\n</button>\n    \n  </div>\n  <div class="card__descr">\n    <h2 class="card__title">${e.title}</h2>\n    <p class="card__subtitle">${e.list_name}</p>\n    <p class="card__text">\n    ${e.description}\n    </p>\n\n    <div class="author">\n      <p class="author__name">${e.author}</p>\n\n      <ul class="shops list">\n        <li class="shop__item shop__item--amazon">\n          <a\n            class="shop__link link"\n            href="${e.amazonUrl}"\n            target="_blank"\n          rel="noreferrer noopener"\n            aria-label="Amazon"\n          >\n            <img\n              class="shop__icon"\n              srcset="${n(i)} 1x, ${n(o)} 2x"\n              src="${n(i)}"\n              alt="Shop icon"\n            />\n          </a>\n        </li>\n\n        <li class="shop__item shop__item--book">\n          <a\n            class="shop__link link"\n            href="${e.appleUrl}"\n            target="_blank"\n          rel="noreferrer noopener"\n            aria-label="Apple books"\n          >\n            <img\n              class="shop__icon"\n              srcset="${n(a)} 1x, ${n(l)} 2x"\n              src="${n(a)}"\n              alt="Shop icon"\n            />\n          </a>\n        </li>\n\n        <li class="shop__item shop__item--bookshop">\n          <a\n            class="shop__link link"\n            href="${e.bookShopUrl}"\n            target="_blank"\n          rel="noreferrer noopener"\n            aria-label="Bookshop"\n          >\n            <img\n              class="shop__icon"\n              srcset="${n(c)} 1x, ${n(u)} 2x"\n              src="${n(c)}"\n              alt="Shop icon"\n            />\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n            </li>`}})),s.register("a0DK1",(function(t,r){e(t.exports,"amazon",(function(){return n(s("gJ9wI"))})),e(t.exports,"amazon2x",(function(){return n(s("1a70O"))})),e(t.exports,"appleBook",(function(){return n(s("aJr22"))})),e(t.exports,"appleBook2x",(function(){return n(s("hY2xG"))})),e(t.exports,"bookshop",(function(){return n(s("cXH47"))})),e(t.exports,"bookshop2x",(function(){return n(s("7d2cy"))}));s("aueOF"),s("gJ9wI"),s("1a70O"),s("aJr22"),s("hY2xG"),s("cXH47"),s("7d2cy")})),s.register("aueOF",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("l4292")})),s.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),i[e]=t),t}})),s.register("gJ9wI",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("gWdqi")})),s.register("1a70O",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("4E1t0")})),s.register("aJr22",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("bFq7w")})),s.register("hY2xG",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("aHPlI")})),s.register("cXH47",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("iPzLP")})),s.register("7d2cy",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("f4CxA")})),s.register("d0slW",(function(e,t){s("4srxN")})),s.register("4srxN",(function(e,t){s("e1ad9");var n=s("2pSj8"),r=s("9WMMt"),i=s("7r2kV"),o=s("aMxGo");document.querySelector(".js-founds-slider").innerHTML=(0,i.renderFoundsList)(o.founds),new(0,n.default)(".swiper",{direction:"vertical",loop:!0,slidesPerView:4,spaceBetween:20,breakpoints:{768:{slidesPerView:6}},modules:[r.default],navigation:{nextEl:".swiper-button"}})})),s.register("e1ad9",(function(t,n){e(t.exports,"default",(function(){return s("2pSj8").default})),e(t.exports,"Navigation",(function(){return s("9WMMt").default}));s("2pSj8"),s("8yLOY"),s("30g62"),s("83sVu"),s("9WMMt"),s("b8pg8"),s("YTZEf"),s("kAoeR"),s("3EEOo"),s("fmgxr"),s("03NU9"),s("7GhHM"),s("4wI1J"),s("aKPtp"),s("bRKLr"),s("f36ow"),s("aiDHc"),s("cfI62"),s("gLF5N"),s("cvfCB"),s("4XBnY"),s("fQuuL"),s("k5zRe"),s("cYKtI")})),s.register("2pSj8",(function(t,n){e(t.exports,"default",(function(){return k}));var r=s("58sFY"),i=s("1EjTE"),o=s("ledMJ"),a=s("4rC3V"),l=s("lhE85"),c=s("hoK65"),u=s("5NIfu"),d=s("3lgo1"),h=s("42aG2"),p=s("lUFJw"),f=s("59lEw"),g=s("itDrZ"),m=s("aSak5"),v=s("61axM"),_=s("lrPYL"),y=s("lWyhG"),w=s("9Vwwo"),b=s("h5TWE"),T=s("959nv"),C=s("6gDqh"),E=s("7eaCI");const x={eventsEmitter:d.default,update:h.default,translate:p.default,transition:f.default,slide:g.default,loop:m.default,grabCursor:v.default,events:_.default,breakpoints:y.default,checkOverflow:b.default,classes:w.default},S={};class I{constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=(0,i.extend)({},n),t&&!n.el&&(n.el=t);const s=(0,r.getDocument)();if(n.el&&"string"==typeof n.el&&s.querySelectorAll(n.el).length>1){const e=[];return s.querySelectorAll(n.el).forEach((t=>{const r=(0,i.extend)({},n,{el:t});e.push(new I(r))})),e}const c=this;c.__swiper__=!0,c.support=(0,o.getSupport)(),c.device=(0,a.getDevice)({userAgent:n.userAgent}),c.browser=(0,l.getBrowser)(),c.eventsListeners={},c.eventsAnyListeners=[],c.modules=[...c.__modules__],n.modules&&Array.isArray(n.modules)&&c.modules.push(...n.modules);const u={};c.modules.forEach((e=>{e({params:n,swiper:c,extendParams:(0,C.default)(n,u),on:c.on.bind(c),once:c.once.bind(c),off:c.off.bind(c),emit:c.emit.bind(c)})}));const d=(0,i.extend)({},T.default,u);return c.params=(0,i.extend)({},d,S,n),c.originalParams=(0,i.extend)({},c.params),c.passedParams=(0,i.extend)({},n),c.params&&c.params.on&&Object.keys(c.params.on).forEach((e=>{c.on(e,c.params.on[e])})),c.params&&c.params.onAny&&c.onAny(c.params.onAny),Object.assign(c,{enabled:c.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===c.params.direction,isVertical:()=>"vertical"===c.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:c.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:c.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),c.emit("_swiper"),c.params.init&&c.init(),c}getSlideIndex(e){const{slidesEl:t,params:n}=this,r=(0,i.elementChildren)(t,`.${n.slideClass}, swiper-slide`),s=(0,i.elementIndex)(r[0]);return(0,i.elementIndex)(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=(0,i.elementChildren)(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:r,slidesGrid:i,slidesSizesGrid:s,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=r[a].swiperSlideSize;for(let n=a+1;n<r.length;n+=1)r[n]&&!e&&(t+=r[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)r[n]&&!e&&(t+=r[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<r.length;e+=1){(t?i[e]+s[e]-i[a]<o:i[e]-i[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){i[a]-i[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function r(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&(0,E.processLazyPreloader)(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)r(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,r=n.params.direction;return e||(e="horizontal"===r?"vertical":"horizontal"),e===r||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(r())}return(0,i.elementChildren)(n,r())[0]})();return!s&&t.params.createElements&&(s=(0,i.createElement)("div",t.params.wrapperClass),n.append(s),(0,i.elementChildren)(n,`.${t.params.slideClass}`).forEach((e=>{s.append(e)}))),Object.assign(t,{el:n,wrapperEl:s,slidesEl:t.isElement?n:s,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===(0,i.elementStyle)(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===(0,i.elementStyle)(n,"direction")),wrongRTL:"-webkit-box"===(0,i.elementStyle)(s,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?(0,E.processLazyPreloader)(t,e):e.addEventListener("load",(e=>{(0,E.processLazyPreloader)(t,e.target)}))})),(0,E.preload)(t),t.initialized=!0,(0,E.preload)(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:r,el:s,wrapperEl:o,slides:a}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach((e=>{e.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,(0,i.deleteProps)(n)),n.destroyed=!0),null}static extendDefaults(e){(0,i.extend)(S,e)}static get extendedDefaults(){return S}static get defaults(){return T.default}static installModule(e){I.prototype.__modules__||(I.prototype.__modules__=[]);const t=I.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>I.installModule(e))),I):(I.installModule(e),I)}}Object.keys(x).forEach((e=>{Object.keys(x[e]).forEach((t=>{I.prototype[t]=x[e][t]}))})),I.use([c.default,u.default]);var k=I})),s.register("58sFY",(function(t,n){function r(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function i(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:r(t[n])&&r(e[n])&&Object.keys(t[n]).length>0&&i(e[n],t[n])}))}e(t.exports,"getDocument",(function(){return o})),e(t.exports,"getWindow",(function(){return l}));const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function o(){const e="undefined"!=typeof document?document:{};return i(e,s),e}const a={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function l(){const e="undefined"!=typeof window?window:{};return i(e,a),e}})),s.register("1EjTE",(function(t,n){e(t.exports,"deleteProps",(function(){return i})),e(t.exports,"nextTick",(function(){return o})),e(t.exports,"now",(function(){return a})),e(t.exports,"getTranslate",(function(){return l})),e(t.exports,"isObject",(function(){return c})),e(t.exports,"extend",(function(){return u})),e(t.exports,"setCSSProperty",(function(){return d})),e(t.exports,"animateCSSModeScroll",(function(){return h})),e(t.exports,"getSlideTransformEl",(function(){return p})),e(t.exports,"elementChildren",(function(){return f})),e(t.exports,"createElement",(function(){return g})),e(t.exports,"elementOffset",(function(){return m})),e(t.exports,"elementPrevAll",(function(){return v})),e(t.exports,"elementNextAll",(function(){return _})),e(t.exports,"elementStyle",(function(){return y})),e(t.exports,"elementIndex",(function(){return w})),e(t.exports,"elementParents",(function(){return b})),e(t.exports,"elementTransitionEnd",(function(){return T})),e(t.exports,"elementOuterSize",(function(){return C}));var r=s("58sFY");function i(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function o(e,t=0){return setTimeout(e,t)}function a(){return Date.now()}function l(e,t="x"){const n=(0,r.getWindow)();let i,s,o;const a=function(e){const t=(0,r.getWindow)();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(s=a.transform||a.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),o=new n.WebKitCSSMatrix("none"===s?"":s)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=o.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?o.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=n.WebKitCSSMatrix?o.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0}function c(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function u(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const s=e[i];if(null!=s&&(r=s,!("undefined"!=typeof window&&void 0!==window.HTMLElement?r instanceof HTMLElement:r&&(1===r.nodeType||11===r.nodeType)))){const e=Object.keys(Object(s)).filter((e=>n.indexOf(e)<0));for(let n=0,r=e.length;n<r;n+=1){const r=e[n],i=Object.getOwnPropertyDescriptor(s,r);void 0!==i&&i.enumerable&&(c(t[r])&&c(s[r])?s[r].__swiper__?t[r]=s[r]:u(t[r],s[r]):!c(t[r])&&c(s[r])?(t[r]={},s[r].__swiper__?t[r]=s[r]:u(t[r],s[r])):t[r]=s[r])}}}var r;return t}function d(e,t,n){e.style.setProperty(t,n)}function h({swiper:e,targetPosition:t,side:n}){const i=(0,r.getWindow)(),s=-e.translate;let o,a=null;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,d=()=>{o=(new Date).getTime(),null===a&&(a=o);const r=Math.max(Math.min((o-a)/l,1),0),c=.5-Math.cos(r*Math.PI)/2;let h=s+c*(t-s);if(u(h,t)&&(h=t),e.wrapperEl.scrollTo({[n]:h}),u(h,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:h})})),void i.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=i.requestAnimationFrame(d)};d()}function p(e){return e.querySelector(".swiper-slide-transform")||e.shadowEl&&e.shadowEl.querySelector(".swiper-slide-transform")||e}function f(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function g(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function m(e){const t=(0,r.getWindow)(),n=(0,r.getDocument)(),i=e.getBoundingClientRect(),s=n.body,o=e.clientTop||s.clientTop||0,a=e.clientLeft||s.clientLeft||0,l=e===t?t.scrollY:e.scrollTop,c=e===t?t.scrollX:e.scrollLeft;return{top:i.top+l-o,left:i.left+c-a}}function v(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function _(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function y(e,t){return(0,r.getWindow)().getComputedStyle(e,null).getPropertyValue(t)}function w(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function b(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function T(e,t){t&&e.addEventListener("transitionend",(function n(r){r.target===e&&(t.call(e,r),e.removeEventListener("transitionend",n))}))}function C(e,t,n){const i=(0,r.getWindow)();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}})),s.register("ledMJ",(function(t,n){e(t.exports,"getSupport",(function(){return o}));var r=s("58sFY");let i;function o(){return i||(i=function(){const e=(0,r.getWindow)(),t=(0,r.getDocument)();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),i}})),s.register("4rC3V",(function(t,n){e(t.exports,"getDevice",(function(){return a}));var r=s("58sFY"),i=s("ledMJ");let o;function a(e={}){return o||(o=function({userAgent:e}={}){const t=(0,i.getSupport)(),n=(0,r.getWindow)(),s=n.navigator.platform,o=e||n.navigator.userAgent,a={ios:!1,android:!1},l=n.screen.width,c=n.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let d=o.match(/(iPad).*OS\s([\d_]+)/);const h=o.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===s;let g="MacIntel"===s;return!d&&g&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${c}`)>=0&&(d=o.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),g=!1),u&&!f&&(a.os="android",a.android=!0),(d||p||h)&&(a.os="ios",a.ios=!0),a}(e)),o}})),s.register("lhE85",(function(t,n){e(t.exports,"getBrowser",(function(){return o}));var r=s("58sFY");let i;function o(){return i||(i=function(){const e=(0,r.getWindow)();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,r]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&r<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),i}})),s.register("hoK65",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("58sFY");function i({swiper:e,on:t,emit:n}){const i=(0,r.getWindow)();let s=null,o=null;const a=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},l=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==i.ResizeObserver?e&&!e.destroyed&&e.initialized&&(s=new ResizeObserver((t=>{o=i.requestAnimationFrame((()=>{const{width:n,height:r}=e;let i=n,s=r;t.forEach((({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)})),i===n&&s===r||a()}))})),s.observe(e.el)):(i.addEventListener("resize",a),i.addEventListener("orientationchange",l))})),t("destroy",(()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",l)}))}})),s.register("5NIfu",(function(t,n){e(t.exports,"default",(function(){return o}));var r=s("58sFY"),i=s("1EjTE");function o({swiper:e,extendParams:t,on:n,emit:s}){const o=[],a=(0,r.getWindow)(),l=(t,n={})=>{const r=new(a.MutationObserver||a.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void s("observerUpdate",t[0]);const n=function(){s("observerUpdate",t[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)}));r.observe(t,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),o.push(r)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=(0,i.elementParents)(e.el);for(let e=0;e<t.length;e+=1)l(t[e])}l(e.el,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}})),n("destroy",(()=>{o.forEach((e=>{e.disconnect()})),o.splice(0,o.length)}))}})),s.register("3lgo1",(function(t,n){e(t.exports,"default",(function(){return r}));var r={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;const i=n?"unshift":"push";return e.split(" ").forEach((e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)})),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,r,i;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...r])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,r)}))})),t}}})),s.register("42aG2",(function(t,n){e(t.exports,"default",(function(){return p}));var r=s("gXfEI"),i=s("fdMLQ"),o=s("56ZNO"),a=s("hIP6N"),l=s("dW6z4"),c=s("5P2Nk"),u=s("1kvfj"),d=s("KG4bf"),h=s("9VeMF"),p={updateSize:r.default,updateSlides:i.default,updateAutoHeight:o.default,updateSlidesOffset:a.default,updateSlidesProgress:l.default,updateProgress:c.default,updateSlidesClasses:u.default,updateActiveIndex:d.default,updateClickedSlide:h.default}})),s.register("gXfEI",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(){const e=this;let t,n;const i=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt((0,r.elementStyle)(i,"padding-left")||0,10)-parseInt((0,r.elementStyle)(i,"padding-right")||0,10),n=n-parseInt((0,r.elementStyle)(i,"padding-top")||0,10)-parseInt((0,r.elementStyle)(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}})),s.register("fdMLQ",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const i=e.params,{wrapperEl:s,slidesEl:o,size:a,rtlTranslate:l,wrongRTL:c}=e,u=e.virtual&&i.virtual.enabled,d=u?e.virtual.slides.length:e.slides.length,h=(0,r.elementChildren)(o,`.${e.params.slideClass}, swiper-slide`),p=u?e.virtual.slides.length:h.length;let f=[];const g=[],m=[];let v=i.slidesOffsetBefore;"function"==typeof v&&(v=i.slidesOffsetBefore.call(e));let _=i.slidesOffsetAfter;"function"==typeof _&&(_=i.slidesOffsetAfter.call(e));const y=e.snapGrid.length,w=e.slidesGrid.length;let b=i.spaceBetween,T=-v,C=0,E=0;if(void 0===a)return;"string"==typeof b&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*a:"string"==typeof b&&(b=parseFloat(b)),e.virtualSize=-b,h.forEach((e=>{l?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),i.centeredSlides&&i.cssMode&&((0,r.setCSSProperty)(s,"--swiper-centered-offset-before",""),(0,r.setCSSProperty)(s,"--swiper-centered-offset-after",""));const x=i.grid&&i.grid.rows>1&&e.grid;let S;x&&e.grid.initSlides(p);const I="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter((e=>void 0!==i.breakpoints[e].slidesPerView)).length>0;for(let s=0;s<p;s+=1){let o;if(S=0,h[s]&&(o=h[s]),x&&e.grid.updateSlide(s,o,p,t),!h[s]||"none"!==(0,r.elementStyle)(o,"display")){if("auto"===i.slidesPerView){I&&(h[s].style[t("width")]="");const a=getComputedStyle(o),l=o.style.transform,c=o.style.webkitTransform;if(l&&(o.style.transform="none"),c&&(o.style.webkitTransform="none"),i.roundLengths)S=e.isHorizontal()?(0,r.elementOuterSize)(o,"width",!0):(0,r.elementOuterSize)(o,"height",!0);else{const e=n(a,"width"),t=n(a,"padding-left"),r=n(a,"padding-right"),i=n(a,"margin-left"),s=n(a,"margin-right"),l=a.getPropertyValue("box-sizing");if(l&&"border-box"===l)S=e+i+s;else{const{clientWidth:n,offsetWidth:a}=o;S=e+t+r+i+s+(a-n)}}l&&(o.style.transform=l),c&&(o.style.webkitTransform=c),i.roundLengths&&(S=Math.floor(S))}else S=(a-(i.slidesPerView-1)*b)/i.slidesPerView,i.roundLengths&&(S=Math.floor(S)),h[s]&&(h[s].style[t("width")]=`${S}px`);h[s]&&(h[s].swiperSlideSize=S),m.push(S),i.centeredSlides?(T=T+S/2+C/2+b,0===C&&0!==s&&(T=T-a/2-b),0===s&&(T=T-a/2-b),Math.abs(T)<.001&&(T=0),i.roundLengths&&(T=Math.floor(T)),E%i.slidesPerGroup==0&&f.push(T),g.push(T)):(i.roundLengths&&(T=Math.floor(T)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup==0&&f.push(T),g.push(T),T=T+S+b),e.virtualSize+=S+b,C=S,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+_,l&&c&&("slide"===i.effect||"coverflow"===i.effect)&&(s.style.width=`${e.virtualSize+b}px`),i.setWrapperSize&&(s.style[t("width")]=`${e.virtualSize+b}px`),x&&e.grid.updateWrapperSize(S,f,t),!i.centeredSlides){const t=[];for(let n=0;n<f.length;n+=1){let r=f[n];i.roundLengths&&(r=Math.floor(r)),f[n]<=e.virtualSize-a&&t.push(r)}f=t,Math.floor(e.virtualSize-a)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-a)}if(u&&i.loop){const t=m[0]+b;if(i.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),r=t*i.slidesPerGroup;for(let e=0;e<n;e+=1)f.push(f[f.length-1]+r)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===i.slidesPerGroup&&f.push(f[f.length-1]+t),g.push(g[g.length-1]+t),e.virtualSize+=t}if(0===f.length&&(f=[0]),0!==b){const n=e.isHorizontal()&&l?"marginLeft":t("marginRight");h.filter(((e,t)=>!(i.cssMode&&!i.loop)||t!==h.length-1)).forEach((e=>{e.style[n]=`${b}px`}))}if(i.centeredSlides&&i.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(b||0)})),e-=b;const t=e-a;f=f.map((e=>e<0?-v:e>t?t+_:e))}if(i.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(b||0)})),e-=b,e<a){const t=(a-e)/2;f.forEach(((e,n)=>{f[n]=e-t})),g.forEach(((e,n)=>{g[n]=e+t}))}}if(Object.assign(e,{slides:h,snapGrid:f,slidesGrid:g,slidesSizesGrid:m}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){(0,r.setCSSProperty)(s,"--swiper-centered-offset-before",-f[0]+"px"),(0,r.setCSSProperty)(s,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(p!==d&&e.emit("slidesLengthChange"),f.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==w&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!(u||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const t=`${i.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);p<=i.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}}})),s.register("56ZNO",(function(t,n){function r(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i,s=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(i=0;i<n.length;i+=1)if(void 0!==n[i]){const e=n[i].offsetHeight;s=e>s?e:s}(s||0===s)&&(t.wrapperEl.style.height=`${s}px`)}e(t.exports,"default",(function(){return r}))})),s.register("hIP6N",(function(t,n){function r(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}e(t.exports,"default",(function(){return r}))})),s.register("dW6z4",(function(t,n){function r(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(0===r.length)return;void 0===r[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<r.length;e+=1){const l=r[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),d=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=-(o-c),p=h+t.slidesSizesGrid[e];(h>=0&&h<t.size-1||p>1&&p<=t.size||h<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),r[e].classList.add(n.slideVisibleClass)),l.progress=i?-u:u,l.originalProgress=i?-d:d}}e(t.exports,"default",(function(){return r}))})),s.register("5P2Nk",(function(t,n){function r(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,c=o;if(0===r)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;s=n||i<=0,o=a||i>=1,n&&(i=0),a&&(i=1)}if(n.loop){const n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],s=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=i?(l-i)/o:(l+o-s)/o,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}e(t.exports,"default",(function(){return r}))})),s.register("1kvfj",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(){const e=this,{slides:t,params:n,slidesEl:i,activeIndex:s}=e,o=e.virtual&&n.virtual.enabled,a=e=>(0,r.elementChildren)(i,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let l;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),o)if(n.loop){let t=s-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${t}"]`)}else l=a(`[data-swiper-slide-index="${s}"]`);else l=t[s];if(l){l.classList.add(n.slideActiveClass);let e=(0,r.elementNextAll)(l,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let i=(0,r.elementPrevAll)(l,`.${n.slideClass}, swiper-slide`)[0];n.loop,i&&i.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}})),s.register("KG4bf",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("7eaCI");function i(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:s,activeIndex:o,realIndex:a,snapIndex:l}=t;let c,u=e;const d=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===u&&(u=function(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1):r>=t[e]&&(i=e);return n.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),i.indexOf(n)>=0)c=i.indexOf(n);else{const e=Math.min(s.slidesPerGroupSkip,u);c=e+Math.floor((u-e)/s.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),u===o)return c!==l&&(t.snapIndex=c,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=d(u)));let h;h=t.virtual&&s.virtual.enabled&&s.loop?d(u):t.slides[u]?parseInt(t.slides[u].getAttribute("data-swiper-slide-index")||u,10):u,Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:h,previousIndex:o,activeIndex:u}),t.initialized&&(0,r.preload)(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==h&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}})),s.register("7eaCI",(function(t,n){e(t.exports,"processLazyPreloader",(function(){return r})),e(t.exports,"preload",(function(){return s}));const r=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){const t=n.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},i=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},s=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex,o=s+r-1;if(e.params.rewind)for(let r=s-t;r<=o+t;r+=1){const t=(r%n+n)%n;t!==s&&t>o&&i(e,t)}else for(let r=Math.max(o-t,0);r<=Math.min(o+t,n-1);r+=1)r!==s&&r>o&&i(e,r)}})),s.register("9VeMF",(function(t,n){function r(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let i,s=!1;if(r)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===r){s=!0,i=e;break}if(!r||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}e(t.exports,"default",(function(){return r}))})),s.register("lUFJw",(function(t,n){e(t.exports,"default",(function(){return c}));var r=s("1vNo4"),i=s("kCYKF"),o=s("7THKu"),a=s("dzDR0"),l=s("dVcfr"),c={getTranslate:r.default,setTranslate:i.default,minTranslate:o.default,maxTranslate:a.default,translateTo:l.default}})),s.register("1vNo4",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:i,wrapperEl:s}=this;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let o=(0,r.getTranslate)(s,e);return o+=this.cssOverflowAdjustment(),n&&(o=-o),o||0}})),s.register("kCYKF",(function(t,n){function r(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a=0,l=0;let c;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();c=0===u?0:(e-n.minTranslate())/u,c!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}e(t.exports,"default",(function(){return r}))})),s.register("7THKu",(function(t,n){function r(){return-this.snapGrid[0]}e(t.exports,"default",(function(){return r}))})),s.register("dzDR0",(function(t,n){function r(){return-this.snapGrid[this.snapGrid.length-1]}e(t.exports,"default",(function(){return r}))})),s.register("dVcfr",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(e=0,t=this.params.speed,n=!0,i=!0,s){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const c=o.minTranslate(),u=o.maxTranslate();let d;if(d=i&&e>c?c:i&&e<u?u:e,o.updateProgress(d),a.cssMode){const e=o.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return(0,r.animateCSSModeScroll)({swiper:o,targetPosition:-d,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-d,behavior:"smooth"})}return!0}return 0===t?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,s),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,s),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}})),s.register("59lEw",(function(t,n){e(t.exports,"default",(function(){return a}));var r=s("kR0Vg"),i=s("488q8"),o=s("99Zle"),a={setTransition:r.default,transitionStart:i.default,transitionEnd:o.default}})),s.register("kR0Vg",(function(t,n){function r(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}e(t.exports,"default",(function(){return r}))})),s.register("488q8",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("4aOW6");function i(e=!0,t){const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),(0,r.default)({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}})),s.register("4aOW6",(function(t,n){function r({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:s}=e;let o=n;if(o||(o=i>s?"next":i<s?"prev":"reset"),e.emit(`transition${r}`),t&&i!==s){if("reset"===o)return void e.emit(`slideResetTransition${r}`);e.emit(`slideChangeTransition${r}`),"next"===o?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}e(t.exports,"default",(function(){return r}))})),s.register("99Zle",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("4aOW6");function i(e=!0,t){const n=this,{params:i}=n;n.animating=!1,i.cssMode||(n.setTransition(0),(0,r.default)({swiper:n,runCallbacks:e,direction:t,step:"End"}))}})),s.register("itDrZ",(function(t,n){e(t.exports,"default",(function(){return d}));var r=s("OZIeq"),i=s("cGTS6"),o=s("7Y909"),a=s("3B7dt"),l=s("dhKLJ"),c=s("fn7l8"),u=s("hk5na"),d={slideTo:r.default,slideToLoop:i.default,slideNext:o.default,slidePrev:a.default,slideReset:l.default,slideToClosest:c.default,slideToClickedSlide:u.default}})),s.register("OZIeq",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(e=0,t=this.params.speed,n=!0,i,s){"string"==typeof e&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:c,slidesGrid:u,previousIndex:d,activeIndex:h,rtlTranslate:p,wrapperEl:f,enabled:g}=o;if(o.animating&&l.preventInteractionOnTransition||!g&&!i&&!s)return!1;const m=Math.min(o.params.slidesPerGroupSkip,a);let v=m+Math.floor((a-m)/o.params.slidesPerGroup);v>=c.length&&(v=c.length-1);const _=-c[v];if(l.normalizeSlideIndex)for(let e=0;e<u.length;e+=1){const t=-Math.floor(100*_),n=Math.floor(100*u[e]),r=Math.floor(100*u[e+1]);void 0!==u[e+1]?t>=n&&t<r-(r-n)/2?a=e:t>=n&&t<r&&(a=e+1):t>=n&&(a=e)}if(o.initialized&&a!==h){if(!o.allowSlideNext&&_<o.translate&&_<o.minTranslate())return!1;if(!o.allowSlidePrev&&_>o.translate&&_>o.maxTranslate()&&(h||0)!==a)return!1}let y;if(a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(_),y=a>h?"next":a<h?"prev":"reset",p&&-_===o.translate||!p&&_===o.translate)return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),"slide"!==l.effect&&o.setTranslate(_),"reset"!==y&&(o.transitionStart(n,y),o.transitionEnd(n,y)),!1;if(l.cssMode){const e=o.isHorizontal(),n=p?_:-_;if(0===t){const t=o.virtual&&o.params.virtual.enabled;t&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),t&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{f[e?"scrollLeft":"scrollTop"]=n}))):f[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1}))}else{if(!o.support.smoothScroll)return(0,r.animateCSSModeScroll)({swiper:o,targetPosition:n,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(_),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,i),o.transitionStart(n,y),0===t?o.transitionEnd(n,y):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,y))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}})),s.register("cGTS6",(function(t,n){function r(e=0,t=this.params.speed,n=!0,r){if("string"==typeof e){e=parseInt(e,10)}const i=this;let s=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?s+=i.virtual.slidesBefore:s=i.getSlideIndexByData(s)),i.slideTo(s,t,n,r)}e(t.exports,"default",(function(){return r}))})),s.register("7Y909",(function(t,n){function r(e=this.params.speed,t=!0,n){const r=this,{enabled:i,params:s,animating:o}=r;if(!i)return r;let a=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,c=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}e(t.exports,"default",(function(){return r}))})),s.register("3B7dt",(function(t,n){function r(e=this.params.speed,t=!0,n){const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=r;if(!l)return r;const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const h=d(a?r.translate:-r.translate),p=s.map((e=>d(e)));let f=s[p.indexOf(h)-1];if(void 0===f&&i.cssMode){let e;s.forEach(((t,n)=>{h>=t&&(e=n)})),void 0!==e&&(f=s[e>0?e-1:e])}let g=0;if(void 0!==f&&(g=o.indexOf(f),g<0&&(g=r.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&r.isBeginning){const i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}return r.slideTo(g,e,t,n)}e(t.exports,"default",(function(){return r}))})),s.register("dhKLJ",(function(t,n){function r(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)}e(t.exports,"default",(function(){return r}))})),s.register("fn7l8",(function(t,n){function r(e=this.params.speed,t=!0,n,r=.5){const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const e=i.snapGrid[a];l-e>(i.snapGrid[a+1]-e)*r&&(s+=i.params.slidesPerGroup)}else{const e=i.snapGrid[a-1];l-e<=(i.snapGrid[a]-e)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}e(t.exports,"default",(function(){return r}))})),s.register("hk5na",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(){const e=this,{params:t,slidesEl:n}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let s,o=e.clickedIndex;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?o<e.loopedSlides-i/2||o>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),o=e.getSlideIndex((0,r.elementChildren)(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),(0,r.nextTick)((()=>{e.slideTo(o)}))):e.slideTo(o):o>e.slides.length-i?(e.loopFix(),o=e.getSlideIndex((0,r.elementChildren)(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),(0,r.nextTick)((()=>{e.slideTo(o)}))):e.slideTo(o)}else e.slideTo(o)}})),s.register("aSak5",(function(t,n){e(t.exports,"default",(function(){return a}));var r=s("3Gh7G"),i=s("7AnfI"),o=s("5gsL1"),a={loopCreate:r.default,loopFix:i.default,loopDestroy:o.default}})),s.register("3Gh7G",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(e){const t=this,{params:n,slidesEl:i}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;(0,r.elementChildren)(i,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}})),s.register("7AnfI",(function(t,n){function r({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:d,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled)return t&&(h.centeredSlides||0!==a.snapIndex?h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,void a.emit("loopFix");const p="auto"===h.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let f=h.loopedSlides||p;f%h.slidesPerGroup!=0&&(f+=h.slidesPerGroup-f%h.slidesPerGroup),a.loopedSlides=f;const g=[],m=[];let v=a.activeIndex;void 0===i?i=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(h.slideActiveClass)))[0]):v=i;const _="next"===n||!n,y="prev"===n||!n;let w=0,b=0;if(i<f){w=Math.max(f-i,h.slidesPerGroup);for(let e=0;e<f-i;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(l.length-t-1)}}else if(i>a.slides.length-2*f){b=Math.max(i-(a.slides.length-2*f),h.slidesPerGroup);for(let e=0;e<b;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(t)}}if(y&&g.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,d.prepend(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),_&&m.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,d.append(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),a.recalcSlides(),"auto"===h.slidesPerView&&a.updateSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),t)if(g.length>0&&y)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v+w]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v+w,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else r&&a.slideToLoop(e,0,!1,!0);else if(m.length>0&&_)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v-b]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v-b,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!s){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")}e(t.exports,"default",(function(){return r}))})),s.register("5gsL1",(function(t,n){function r(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;r[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),r.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}e(t.exports,"default",(function(){return r}))})),s.register("61axM",(function(t,n){e(t.exports,"default",(function(){return o}));var r=s("3mSh2"),i=s("aozqy"),o={setGrabCursor:r.default,unsetGrabCursor:i.default}})),s.register("3mSh2",(function(t,n){function r(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))}e(t.exports,"default",(function(){return r}))})),s.register("aozqy",(function(t,n){function r(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}e(t.exports,"default",(function(){return r}))})),s.register("lrPYL",(function(t,n){e(t.exports,"default",(function(){return g}));var r=s("58sFY"),i=s("97DRT"),o=s("ex2Z8"),a=s("1OTa3"),l=s("kXZZT"),c=s("35dR0"),u=s("19FtL"),d=s("1jcRQ");let h=!1;function p(){}const f=(e,t)=>{const n=(0,r.getDocument)(),{params:i,el:s,wrapperEl:o,device:a}=e,c=!!i.nested,u="on"===t?"addEventListener":"removeEventListener",d=t;s[u]("pointerdown",e.onTouchStart,{passive:!1}),n[u]("pointermove",e.onTouchMove,{passive:!1,capture:c}),n[u]("pointerup",e.onTouchEnd,{passive:!0}),n[u]("pointercancel",e.onTouchEnd,{passive:!0}),n[u]("pointerout",e.onTouchEnd,{passive:!0}),n[u]("pointerleave",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&s[u]("click",e.onClick,!0),i.cssMode&&o[u]("scroll",e.onScroll),i.updateOnWindowResize?e[d](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",l.default,!0):e[d]("observerUpdate",l.default,!0),s[u]("load",e.onLoad,{capture:!0})};var g={attachEvents:function(){const e=this,t=(0,r.getDocument)(),{params:n}=e;e.onTouchStart=i.default.bind(e),e.onTouchMove=o.default.bind(e),e.onTouchEnd=a.default.bind(e),n.cssMode&&(e.onScroll=u.default.bind(e)),e.onClick=c.default.bind(e),e.onLoad=d.default.bind(e),h||(t.addEventListener("touchstart",p),h=!0),f(e,"on")},detachEvents:function(){f(this,"off")}}})),s.register("97DRT",(function(t,n){e(t.exports,"default",(function(){return o}));var r=s("58sFY"),i=s("1EjTE");function o(e){const t=this,n=(0,r.getDocument)(),s=(0,r.getWindow)(),o=t.touchEventsData;o.evCache.push(e);const{params:a,touches:l,enabled:c}=t;if(!c)return;if(!a.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let u=e;u.originalEvent&&(u=u.originalEvent);let d=u.target;if("wrapper"===a.touchEventsTarget&&!t.wrapperEl.contains(d))return;if("which"in u&&3===u.which)return;if("button"in u&&u.button>0)return;if(o.isTouched&&o.isMoved)return;const h=!!a.noSwipingClass&&""!==a.noSwipingClass,p=e.composedPath?e.composedPath():e.path;h&&u.target&&u.target.shadowRoot&&p&&(d=p[0]);const f=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,g=!(!u.target||!u.target.shadowRoot);if(a.noSwiping&&(g?function(e,t=this){return function t(n){if(!n||n===(0,r.getDocument)()||n===(0,r.getWindow)())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(e);return i||n.getRootNode?i||t(n.getRootNode().host):null}(t)}(f,d):d.closest(f)))return void(t.allowClick=!0);if(a.swipeHandler&&!d.closest(a.swipeHandler))return;l.currentX=u.pageX,l.currentY=u.pageY;const m=l.currentX,v=l.currentY,_=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,y=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(_&&(m<=y||m>=s.innerWidth-y)){if("prevent"!==_)return;e.preventDefault()}Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=m,l.startY=v,o.touchStartTime=(0,i.now)(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(o.allowThresholdMove=!1);let w=!0;d.matches(o.focusableElements)&&(w=!1,"SELECT"===d.nodeName&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==d&&n.activeElement.blur();const b=w&&t.allowTouchMove&&a.touchStartPreventDefault;!a.touchStartForcePreventDefault&&!b||d.isContentEditable||u.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",u)}})),s.register("ex2Z8",(function(t,n){e(t.exports,"default",(function(){return o}));var r=s("58sFY"),i=s("1EjTE");function o(e){const t=(0,r.getDocument)(),n=this,s=n.touchEventsData,{params:o,touches:a,rtlTranslate:l,enabled:c}=n;if(!c)return;if(!o.simulateTouch&&"mouse"===e.pointerType)return;let u=e;if(u.originalEvent&&(u=u.originalEvent),!s.isTouched)return void(s.startMoving&&s.isScrolling&&n.emit("touchMoveOpposite",u));const d=s.evCache.findIndex((e=>e.pointerId===u.pointerId));d>=0&&(s.evCache[d]=u);const h=s.evCache.length>1?s.evCache[0]:u,p=h.pageX,f=h.pageY;if(u.preventedByNestedSwiper)return a.startX=p,void(a.startY=f);if(!n.allowTouchMove)return u.target.matches(s.focusableElements)||(n.allowClick=!1),void(s.isTouched&&(Object.assign(a,{startX:p,startY:f,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:p,currentY:f}),s.touchStartTime=(0,i.now)()));if(o.touchReleaseOnEdges&&!o.loop)if(n.isVertical()){if(f<a.startY&&n.translate<=n.maxTranslate()||f>a.startY&&n.translate>=n.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else if(p<a.startX&&n.translate<=n.maxTranslate()||p>a.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&u.target===t.activeElement&&u.target.matches(s.focusableElements))return s.isMoved=!0,void(n.allowClick=!1);if(s.allowTouchCallbacks&&n.emit("touchMove",u),u.targetTouches&&u.targetTouches.length>1)return;a.currentX=p,a.currentY=f;const g=a.currentX-a.startX,m=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(g**2+m**2)<n.params.threshold)return;if(void 0===s.isScrolling){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?s.isScrolling=!1:g*g+m*m>=25&&(e=180*Math.atan2(Math.abs(m),Math.abs(g))/Math.PI,s.isScrolling=n.isHorizontal()?e>o.touchAngle:90-e>o.touchAngle)}if(s.isScrolling&&n.emit("touchMoveOpposite",u),void 0===s.startMoving&&(a.currentX===a.startX&&a.currentY===a.startY||(s.startMoving=!0)),s.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&s.evCache.length>1)return void(s.isTouched=!1);if(!s.startMoving)return;n.allowClick=!1,!o.cssMode&&u.cancelable&&u.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&u.stopPropagation();let v=n.isHorizontal()?g:m,_=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;o.oneWayMovement&&(v=Math.abs(v)*(l?1:-1),_=Math.abs(_)*(l?1:-1)),a.diff=v,v*=o.touchRatio,l&&(v=-v,_=-_);const y=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=_>0?"prev":"next";const w=n.params.loop&&!o.cssMode;if(!s.isMoved){if(w&&n.loopFix({direction:n.swipeDirection}),s.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}s.allowMomentumBounce=!1,!o.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",u)}let b;s.isMoved&&y!==n.touchesDirection&&w&&Math.abs(v)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),b=!0),n.emit("sliderMove",u),s.isMoved=!0,s.currentTranslate=v+s.startTranslate;let T=!0,C=o.resistanceRatio;if(o.touchReleaseOnEdges&&(C=0),v>0?(w&&!b&&s.currentTranslate>(o.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>n.minTranslate()&&(T=!1,o.resistance&&(s.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+s.startTranslate+v)**C))):v<0&&(w&&!b&&s.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===o.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),s.currentTranslate<n.maxTranslate()&&(T=!1,o.resistance&&(s.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-s.startTranslate-v)**C))),T&&(u.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),n.allowSlidePrev||n.allowSlideNext||(s.currentTranslate=s.startTranslate),o.threshold>0){if(!(Math.abs(v)>o.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,s.currentTranslate=s.startTranslate,void(a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}o.followFinger&&!o.cssMode&&((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(s.currentTranslate),n.setTranslate(s.currentTranslate))}})),s.register("1OTa3",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(e){const t=this,n=t.touchEventsData,i=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(i>=0&&n.evCache.splice(i,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:s,touches:o,rtlTranslate:a,slidesGrid:l,enabled:c}=t;if(!c)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let u=e;if(u.originalEvent&&(u=u.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",u),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);s.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=(0,r.now)(),h=d-n.touchStartTime;if(t.allowClick){const e=u.path||u.composedPath&&u.composedPath();t.updateClickedSlide(e&&e[0]||u.target),t.emit("tap click",u),h<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",u)}if(n.lastClickTime=(0,r.now)(),(0,r.nextTick)((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===o.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let p;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,p=s.followFinger?a?t.translate:-t.translate:-n.currentTranslate,s.cssMode)return;if(t.params.freeMode&&s.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:p});let f=0,g=t.slidesSizesGrid[0];for(let e=0;e<l.length;e+=e<s.slidesPerGroupSkip?1:s.slidesPerGroup){const t=e<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[e+t]?p>=l[e]&&p<l[e+t]&&(f=e,g=l[e+t]-l[e]):p>=l[e]&&(f=e,g=l[l.length-1]-l[l.length-2])}let m=null,v=null;s.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const _=(p-l[f])/g,y=f<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(h>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(_>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?m:f+y):t.slideTo(f)),"prev"===t.swipeDirection&&(_>1-s.longSwipesRatio?t.slideTo(f+y):null!==v&&_<0&&Math.abs(_)>s.longSwipesRatio?t.slideTo(v):t.slideTo(f))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(u.target===t.navigation.nextEl||u.target===t.navigation.prevEl)?u.target===t.navigation.nextEl?t.slideTo(f+y):t.slideTo(f):("next"===t.swipeDirection&&t.slideTo(null!==m?m:f+y),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:f))}}})),s.register("kXZZT",(function(t,n){function r(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}e(t.exports,"default",(function(){return r}))})),s.register("35dR0",(function(t,n){function r(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}e(t.exports,"default",(function(){return r}))})),s.register("19FtL",(function(t,n){function r(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();i=0===s?0:(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}e(t.exports,"default",(function(){return r}))})),s.register("1jcRQ",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("7eaCI");function i(e){(0,r.processLazyPreloader)(this,e.target),this.update()}})),s.register("lWyhG",(function(t,n){e(t.exports,"default",(function(){return o}));var r=s("bGu4B"),i=s("7ogML"),o={setBreakpoint:r.default,getBreakpoint:i.default}})),s.register("bGu4B",(function(t,n){e(t.exports,"default",(function(){return o}));var r=s("1EjTE");const i=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function o(){const e=this,{realIndex:t,initialized:n,params:s,el:o}=e,a=s.breakpoints;if(!a||a&&0===Object.keys(a).length)return;const l=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const c=(l in a?a[l]:void 0)||e.originalParams,u=i(e,s),d=i(e,c),h=s.enabled;u&&!d?(o.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&d&&(o.classList.add(`${s.containerModifierClass}grid`),(c.grid.fill&&"column"===c.grid.fill||!c.grid.fill&&"column"===s.grid.fill)&&o.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=s[t]&&s[t].enabled,r=c[t]&&c[t].enabled;n&&!r&&e[t].disable(),!n&&r&&e[t].enable()}));const p=c.direction&&c.direction!==s.direction,f=s.loop&&(c.slidesPerView!==s.slidesPerView||p);p&&n&&e.changeDirection(),(0,r.extend)(e.params,c);const g=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!g?e.disable():!h&&g&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",c),f&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",c)}})),s.register("7ogML",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("58sFY");function i(e,t="window",n){if(!e||"container"===t&&!n)return;let i=!1;const s=(0,r.getWindow)(),o="window"===t?s.innerHeight:n.clientHeight,a=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:o*t,point:e}}return{value:e,point:e}}));a.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<a.length;e+=1){const{point:r,value:o}=a[e];"window"===t?s.matchMedia(`(min-width: ${o}px)`).matches&&(i=r):o<=n.clientWidth&&(i=r)}return i||"max"}})),s.register("9Vwwo",(function(t,n){e(t.exports,"default",(function(){return o}));var r=s("g0Bml"),i=s("8Ubu7"),o={addClasses:r.default,removeClasses:i.default}})),s.register("g0Bml",(function(t,n){function r(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((r=>{e[r]&&n.push(t+r)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}e(t.exports,"default",(function(){return r}))})),s.register("8Ubu7",(function(t,n){function r(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}e(t.exports,"default",(function(){return r}))})),s.register("h5TWE",(function(t,n){e(t.exports,"default",(function(){return r}));var r={checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*r;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}}})),s.register("959nv",(function(t,n){e(t.exports,"default",(function(){return r}));var r={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1}})),s.register("6gDqh",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(e,t){return function(n={}){const i=Object.keys(n)[0],s=n[i];"object"==typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===e[i]&&(e[i]={auto:!0}),i in e&&"enabled"in s?(!0===e[i]&&(e[i]={enabled:!0}),"object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),(0,r.extend)(t,n)):(0,r.extend)(t,n)):(0,r.extend)(t,n)}}})),s.register("8yLOY",(function(e,t){s("58sFY"),s("1EjTE")})),s.register("30g62",(function(e,t){s("58sFY"),s("1EjTE")})),s.register("83sVu",(function(e,t){s("58sFY"),s("1EjTE")})),s.register("9WMMt",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("kYZkc");function i({swiper:e,extendParams:t,on:n,emit:i}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const s=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function o(t){let n;return t&&"string"==typeof t&&e.isElement&&(n=e.el.shadowRoot.querySelector(t),n)?n:(t&&("string"==typeof t&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"==typeof t&&n.length>1&&1===e.el.querySelectorAll(t).length&&(n=e.el.querySelector(t))),t&&!n?t:n)}function a(t,n){const r=e.params.navigation;(t=s(t)).forEach((t=>{t&&(t.classList[n?"add":"remove"](...r.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](r.lockClass))}))}function l(){const{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop)return a(n,!1),void a(t,!1);a(n,e.isBeginning&&!e.params.rewind),a(t,e.isEnd&&!e.params.rewind)}function c(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function u(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function d(){const t=e.params.navigation;if(e.params.navigation=(0,r.default)(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;let n=o(t.nextEl),i=o(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:i}),n=s(n),i=s(i);const a=(n,r)=>{n&&n.addEventListener("click","next"===r?u:c),!e.enabled&&n&&n.classList.add(...t.lockClass.split(" "))};n.forEach((e=>a(e,"next"))),i.forEach((e=>a(e,"prev")))}function h(){let{nextEl:t,prevEl:n}=e.navigation;t=s(t),n=s(n);const r=(t,n)=>{t.removeEventListener("click","next"===n?u:c),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach((e=>r(e,"next"))),n.forEach((e=>r(e,"prev")))}n("init",(()=>{!1===e.params.navigation.enabled?p():(d(),l())})),n("toEdge fromEdge lock unlock",(()=>{l()})),n("destroy",(()=>{h()})),n("enable disable",(()=>{let{nextEl:t,prevEl:n}=e.navigation;t=s(t),n=s(n),[...t,...n].filter((e=>!!e)).forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass)))})),n("click",((t,n)=>{let{nextEl:r,prevEl:o}=e.navigation;r=s(r),o=s(o);const a=n.target;if(e.params.navigation.hideOnClick&&!o.includes(a)&&!r.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let t;r.length?t=r[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(t=o[0].classList.contains(e.params.navigation.hiddenClass)),i(!0===t?"navigationShow":"navigationHide"),[...r,...o].filter((e=>!!e)).forEach((t=>t.classList.toggle(e.params.navigation.hiddenClass)))}}));const p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),l()},disable:p,update:l,init:d,destroy:h})}})),s.register("kYZkc",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(e,t,n,i){return e.params.createElements&&Object.keys(i).forEach((s=>{if(!n[s]&&!0===n.auto){let o=(0,r.elementChildren)(e.el,`.${i[s]}`)[0];o||(o=(0,r.createElement)("div",i[s]),o.className=i[s],e.el.append(o)),n[s]=o,t[s]=o}})),n}})),s.register("b8pg8",(function(e,t){s("9SBI0"),s("kYZkc"),s("1EjTE")})),s.register("9SBI0",(function(t,n){function r(e=""){return`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}e(t.exports,"default",(function(){return r}))})),s.register("YTZEf",(function(e,t){s("58sFY"),s("1EjTE"),s("kYZkc")})),s.register("kAoeR",(function(e,t){s("1EjTE")})),s.register("3EEOo",(function(e,t){s("58sFY"),s("1EjTE")})),s.register("fmgxr",(function(e,t){s("1EjTE")})),s.register("03NU9",(function(e,t){s("9SBI0"),s("1EjTE")})),s.register("7GhHM",(function(e,t){s("58sFY")})),s.register("4wI1J",(function(e,t){s("58sFY"),s("1EjTE")})),s.register("aKPtp",(function(e,t){s("58sFY")})),s.register("bRKLr",(function(e,t){s("58sFY"),s("1EjTE")})),s.register("f36ow",(function(e,t){s("1EjTE")})),s.register("aiDHc",(function(e,t){})),s.register("cfI62",(function(e,t){s("l0Zfj"),s("3rkwo"),s("25OJB"),s("9JMn0"),s("QbhcQ")})),s.register("l0Zfj",(function(t,n){function r(e){const t=this,{params:n,slidesEl:r}=t;n.loop&&t.loopDestroy();const i=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,r.append(t.children[0]),t.innerHTML=""}else r.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&i(e[t]);else i(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update()}e(t.exports,"default",(function(){return r}))})),s.register("3rkwo",(function(t,n){function r(e){const t=this,{params:n,activeIndex:r,slidesEl:i}=t;n.loop&&t.loopDestroy();let s=r+1;const o=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.prepend(t.children[0]),t.innerHTML=""}else i.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&o(e[t]);s=r+e.length}else o(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),t.slideTo(s,0,!1)}e(t.exports,"default",(function(){return r}))})),s.register("25OJB",(function(t,n){function r(e,t){const n=this,{params:r,activeIndex:i,slidesEl:s}=n;let o=i;r.loop&&(o-=n.loopedSlides,n.loopDestroy(),n.recalcSlides());const a=n.slides.length;if(e<=0)return void n.prependSlide(t);if(e>=a)return void n.appendSlide(t);let l=o>e?o+1:o;const c=[];for(let t=a-1;t>=e;t-=1){const e=n.slides[t];e.remove(),c.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&s.append(t[e]);l=o>e?o+t.length:o}else s.append(t);for(let e=0;e<c.length;e+=1)s.append(c[e]);n.recalcSlides(),r.loop&&n.loopCreate(),r.observer&&!n.isElement||n.update(),r.loop?n.slideTo(l+n.loopedSlides,0,!1):n.slideTo(l,0,!1)}e(t.exports,"default",(function(){return r}))})),s.register("9JMn0",(function(t,n){function r(e){const t=this,{params:n,activeIndex:r}=t;let i=r;n.loop&&(i-=t.loopedSlides,t.loopDestroy());let s,o=i;if("object"==typeof e&&"length"in e){for(let n=0;n<e.length;n+=1)s=e[n],t.slides[s]&&t.slides[s].remove(),s<o&&(o-=1);o=Math.max(o,0)}else s=e,t.slides[s]&&t.slides[s].remove(),s<o&&(o-=1),o=Math.max(o,0);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),n.loop?t.slideTo(o+t.loopedSlides,0,!1):t.slideTo(o,0,!1)}e(t.exports,"default",(function(){return r}))})),s.register("QbhcQ",(function(t,n){function r(){const e=this,t=[];for(let n=0;n<e.slides.length;n+=1)t.push(n);e.removeSlide(t)}e(t.exports,"default",(function(){return r}))})),s.register("gLF5N",(function(e,t){s("cYG3S"),s("e4VWZ"),s("4m87x"),s("1EjTE")})),s.register("cYG3S",(function(t,n){function r(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:s,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=e;let u;r("beforeInit",(()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const e=o?o():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)})),r("setTranslate",(()=>{n.params.effect===t&&i()})),r("setTransition",((e,r)=>{n.params.effect===t&&s(r)})),r("transitionEnd",(()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),l()}})),r("virtualUpdate",(()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame((()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)})))}))}e(t.exports,"default",(function(){return r}))})),s.register("e4VWZ",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(e,t){const n=(0,r.getSlideTransformEl)(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}})),s.register("4m87x",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i({swiper:e,duration:t,transformElements:n,allSlides:i}){const{activeIndex:s}=e;if(e.params.virtualTranslate&&0!==t){let t,o=!1;t=i?n:n.filter((t=>{const n=t.classList.contains("swiper-slide-transform")?(t=>{if(!t.parentElement)return e.slides.filter((e=>e.shadowEl&&e.shadowEl===t.parentNode))[0];return t.parentElement})(t):t;return e.getSlideIndex(n)===s})),t.forEach((t=>{(0,r.elementTransitionEnd)(t,(()=>{if(o)return;if(!e||e.destroyed)return;o=!0,e.animating=!1;const t=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(t)}))}))}}})),s.register("cvfCB",(function(e,t){s("cYG3S"),s("1EjTE")})),s.register("4XBnY",(function(e,t){s("eCKkc"),s("cYG3S"),s("e4VWZ"),s("4m87x"),s("1EjTE")})),s.register("eCKkc",(function(t,n){e(t.exports,"default",(function(){return i}));var r=s("1EjTE");function i(e,t,n){const i="swiper-slide-shadow"+(n?`-${n}`:""),s=(0,r.getSlideTransformEl)(t);let o=s.querySelector(`.${i}`);return o||(o=(0,r.createElement)("div","swiper-slide-shadow"+(n?`-${n}`:"")),s.append(o)),o}})),s.register("fQuuL",(function(e,t){s("eCKkc"),s("cYG3S"),s("e4VWZ"),s("1EjTE")})),s.register("k5zRe",(function(e,t){s("eCKkc"),s("cYG3S"),s("e4VWZ"),s("4m87x"),s("1EjTE")})),s.register("cYKtI",(function(e,t){s("eCKkc"),s("cYG3S"),s("e4VWZ"),s("4m87x"),s("1EjTE")})),s.register("7r2kV",(function(t,n){function r(e){const t=e.map((({id:e,imgUrl:t,img2xUrl:n,companyName:r,linkSupport:i})=>`\n     <div class="swiper-slide founds-list__item">\n        <a class="founds-list__link" href="${i}" rel="nofollow noopener noreferrer" target="_blank">\n          ${e.padStart(2,"0")}\n          <img\n            class="founds-list__icon"\n            srcset="${t} 1x,${n} 2x"\n            src="${t}"\n            alt="${r}"\n          />\n        </a>\n      </div>\n    `)).join("");return`\n  <div class="swiper-wrapper founds-list">\n      ${e.length<12?t+t:t}\n    </div>\n  `}e(t.exports,"renderFoundsList",(function(){return r}))})),s.register("aMxGo",(function(t,r){e(t.exports,"founds",(function(){return C}));var i=s("53uhj"),o=s("gLCm0"),a=s("gR0iu"),l=s("5RbdL"),c=s("4ITkD"),u=s("hZPvo"),d=s("6lKLj"),h=s("exud6"),p=s("iCnkO"),f=s("dlnNH"),g=s("3o3t2"),m=s("4wTGG"),v=s("7UxvM"),_=s("juxRq"),y=s("jjywx"),w=s("9uttS"),b=s("1pMMA"),T=s("ieqhO");const C=[{id:"1",imgUrl:n(i),img2xUrl:n(f),companyName:"Save the Children",linkSupport:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"},{id:"2",imgUrl:n(o),img2xUrl:n(g),companyName:"project HOPE",linkSupport:"https://www.projecthope.org/country/ukraine/"},{id:"3",imgUrl:n(a),img2xUrl:n(m),companyName:"International Medical Corps",linkSupport:"https://internationalmedicalcorps.org/country/ukraine/"},{id:"4",imgUrl:n(l),img2xUrl:n(v),companyName:"RAZOM",linkSupport:"https://www.razomforukraine.org/ua/homeua/"},{id:"5",imgUrl:n(c),img2xUrl:n(_),companyName:"ACTION AGAINST HUNGER",linkSupport:"https://www.actionagainsthunger.org/location/europe/ukraine/"},{id:"6",imgUrl:n(u),img2xUrl:n(y),companyName:"CHARITY FOUNDATION SERGIY PRYTULA",linkSupport:"https://prytulafoundation.org/"},{id:"7",imgUrl:n(d),img2xUrl:n(w),companyName:"UNITED24",linkSupport:"https://u24.gov.ua/uk"},{id:"8",imgUrl:n(h),img2xUrl:n(b),companyName:"MEDECINS SANS FRONTIERES",linkSupport:"https://www.msf.org/ukraine"},{id:"9",imgUrl:n(p),img2xUrl:n(T),companyName:"World Vision",linkSupport:"https://www.wvi.org/emergencies/ukraine"}]})),s.register("53uhj",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("bQ8GV")})),s.register("gLCm0",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("j9aeg")})),s.register("gR0iu",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("eHnkH")})),s.register("5RbdL",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("4UQ21")})),s.register("4ITkD",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("fQsl7")})),s.register("hZPvo",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("kiDdu")})),s.register("6lKLj",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("fo5oi")})),s.register("exud6",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("7cByK")})),s.register("iCnkO",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("hqPnV")})),s.register("dlnNH",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("gA6p3")})),s.register("3o3t2",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("lh3Mp")})),s.register("4wTGG",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("ioylY")})),s.register("7UxvM",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("2R9Wx")})),s.register("juxRq",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("cp8wl")})),s.register("jjywx",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("gQ7YL")})),s.register("9uttS",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("cfbuM")})),s.register("1pMMA",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("1fJf5")})),s.register("ieqhO",(function(e,t){e.exports=s("aNJCr").getBundleURL("8CGLT")+s("iE7OH").resolve("gjib8")})),s("iE7OH").register(JSON.parse('{"8CGLT":"index.6d85ee17.js","l4292":"dump.38fa3b97.svg","gWdqi":"amazon.b8fa90cb.png","4E1t0":"amazon@2x.edefe29e.png","bFq7w":"apple-book.5a9f17e3.png","aHPlI":"apple-book@2x.54474d7d.png","iPzLP":"bookshop.91914384.png","f4CxA":"bookshop@2x.fbbde057.png","bQ8GV":"found-1.ebbf1d9c.png","j9aeg":"found-2.0ed97bef.png","eHnkH":"found-3.c1d39b03.png","4UQ21":"found-4.58197063.png","fQsl7":"found-5.6be93aec.png","kiDdu":"found-6.c4a6a2f3.png","fo5oi":"found-7.7b78ddd2.png","7cByK":"found-8.c3a20212.png","hqPnV":"found-9.da483cbd.png","gA6p3":"found-1@2x.2ea429c3.png","lh3Mp":"found-2@2x.18f992c2.png","ioylY":"found-3@2x.f6b3493f.png","2R9Wx":"found-4@2x.fa976cbe.png","cp8wl":"found-5@2x.6f77d1cc.png","gQ7YL":"found-6@2x.12d59ad2.png","cfbuM":"found-7@2x.409ed2d3.png","1fJf5":"found-8@2x.5ccb0953.png","gjib8":"found-9@2x.c83958db.png"}'))}();
//# sourceMappingURL=index.6d85ee17.js.map
