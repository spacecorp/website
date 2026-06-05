(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4891,(e,t,n)=>{var r={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}var c=[],u=!1,l=-1;function d(){u&&r&&(u=!1,r.length?c=r.concat(c):l=-1,c.length&&f())}function f(){if(!u){var e=s(d);u=!0;for(var t=c.length;t;){for(r=c,c=[];++l<t;)r&&r[l].run();l=-1,t=c.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}},a=!0;try{r[e](n,n.exports,i),a=!1}finally{a&&delete o[e]}return n.exports}i.ab="/ROOT/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next/dist/compiled/process/",t.exports=i(229)},6246,(e,t,n)=>{"use strict";var r,o;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(4891)},6982,(e,t,n)=>{"use strict";var r=Symbol.for("react.transitional.element");function o(e,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return{$$typeof:r,type:e,key:o,ref:void 0!==(t=n.ref)?t:null,props:n}}n.Fragment=Symbol.for("react.fragment"),n.jsx=o,n.jsxs=o},8946,(e,t,n)=>{"use strict";t.exports=e.r(6982)},5281,(e,t,n)=>{"use strict";var r=e.i(6246),o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),l=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),h=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,b={};function x(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}function v(){}function j(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var w=j.prototype=new v;w.constructor=j,_(w,x.prototype),w.isPureReactComponent=!0;var S=Array.isArray;function C(){}var k={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function T(e,t,n){var r=n.ref;return{$$typeof:o,type:e,key:t,ref:void 0!==r?r:null,props:n}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function I(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function $(e,t,n){if(null==e)return e;var r=[],a=0;return!function e(t,n,r,a,s){var c,u,l,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"bigint":case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case o:case i:f=!0;break;case m:return e((f=t._init)(t._payload),n,r,a,s)}}if(f)return s=s(t),f=""===a?"."+I(t,0):a,S(s)?(r="",null!=f&&(r=f.replace(P,"$&/")+"/"),e(s,n,r,"",function(e){return e})):null!=s&&(O(s)&&(c=s,u=r+(null==s.key||t&&t.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+f,s=T(c.type,u,c.props)),n.push(s)),1;f=0;var p=""===a?".":a+":";if(S(t))for(var y=0;y<t.length;y++)d=p+I(a=t[y],y),f+=e(a,n,r,d,s);else if("function"==typeof(y=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=h&&l[h]||l["@@iterator"])?l:null))for(t=y.call(t),y=0;!(a=t.next()).done;)d=p+I(a=a.value,y++),f+=e(a,n,r,d,s);else if("object"===d){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(C,C):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),n,r,a,s);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return f}(e,r,"","",function(e){return t.call(n,e,a++)}),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var H="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof r.default&&"function"==typeof r.default.emit)return void r.default.emit("uncaughtException",e);console.error(e)};n.Activity=y,n.Children={map:$,forEach:function(e,t,n){$(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $(e,function(){t++}),t},toArray:function(e){return $(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=x,n.Fragment=a,n.Profiler=c,n.PureComponent=j,n.StrictMode=s,n.Suspense=f,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,n.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},n.cache=function(e){return function(){return e.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=_({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.key&&(o=""+t.key),t)E.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var a=Array(i),s=0;s<i;s++)a[s]=arguments[s+2];r.children=a}return T(e.type,o,r)},n.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:u,_context:e},e},n.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)E.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return T(e,i,o)},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=O,n.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:N}},n.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),o=k.S;null!==o&&o(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(C,H)}catch(e){H(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),k.T=t}},n.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},n.use=function(e){return k.H.use(e)},n.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},n.useCallback=function(e,t){return k.H.useCallback(e,t)},n.useContext=function(e){return k.H.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},n.useEffect=function(e,t){return k.H.useEffect(e,t)},n.useEffectEvent=function(e){return k.H.useEffectEvent(e)},n.useId=function(){return k.H.useId()},n.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},n.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},n.useMemo=function(e,t){return k.H.useMemo(e,t)},n.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},n.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},n.useRef=function(e){return k.H.useRef(e)},n.useState=function(e){return k.H.useState(e)},n.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},n.useTransition=function(){return k.H.useTransition()},n.version="19.2.7"},3337,(e,t,n)=>{"use strict";t.exports=e.r(5281)},2879,(e,t,n)=>{"use strict";n._=function(e){return e&&e.__esModule?e:{default:e}}},7602,(e,t,n)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}n._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(o,a,s):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}},530,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(2879)._(e.r(3337)).default.createContext({})},6550,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},7282,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let r=e.r(3337),o="u"<typeof window,i=o?()=>{}:r.useLayoutEffect,a=o?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return o&&(t?.mountedInstances?.add(e.children),s()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5200,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return y},defaultHead:function(){return d}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(2879),a=e.r(7602),s=e.r(8946),c=a._(e.r(3337)),u=i._(e.r(7282)),l=e.r(530);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(6550);let p=["name","httpEquiv","charSet","itemProp"];function m(e){let t,n,r,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,n=new Set,r=new Set,o={},e=>{let i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?i=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?i=!1:n.add(e.type);break;case"meta":for(let t=0,n=p.length;t<n;t++){let n=p[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?i=!1:r.add(n);else{let t=e.props[n],r=o[n]||new Set;("name"!==n||!a)&&r.has(t)?i=!1:(r.add(t),o[n]=r)}}}return i})).reverse().map((e,t)=>{let n=e.key||t;return c.default.cloneElement(e,{key:n})})}let y=function({children:e}){let t=(0,c.useContext)(l.HeadManagerContext);return(0,s.jsx)(u.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},7401,(e,t,n)=>{t.exports=e.r(5200)},8953,e=>{"use strict";var t=e.i(6246),n=e.i(8946),r=e.i(7401),o=e.i(7711),i=e.i(4268);let a=i.default.div.withConfig({displayName:"[id]__Container",componentId:"sc-92ba114d-0"})`
  max-width: 900px;
`,s=(0,i.default)(o.default).withConfig({displayName:"[id]__BackLink",componentId:"sc-92ba114d-1"})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 32px;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`,c=i.default.header.withConfig({displayName:"[id]__Header",componentId:"sc-92ba114d-2"})`
  margin-bottom: 48px;
`,u=i.default.h1.withConfig({displayName:"[id]__ProjectTitle",componentId:"sc-92ba114d-3"})`
  margin: 0 0 16px;
  font-size: clamp(2rem, 3vw, 3rem);
`,l=i.default.div.withConfig({displayName:"[id]__ProjectMeta",componentId:"sc-92ba114d-4"})`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
  color: #a0a0a0;
  font-size: 0.95rem;
`,d=i.default.div.withConfig({displayName:"[id]__MetaItem",componentId:"sc-92ba114d-5"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,f=i.default.img.withConfig({displayName:"[id]__ProjectImage",componentId:"sc-92ba114d-6"})`
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 48px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`,p=i.default.div.withConfig({displayName:"[id]__Content",componentId:"sc-92ba114d-7"})`
  display: grid;
  gap: 48px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,m=i.default.div.withConfig({displayName:"[id]__MainContent",componentId:"sc-92ba114d-8"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,y=i.default.section.withConfig({displayName:"[id]__Section",componentId:"sc-92ba114d-9"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,h=i.default.h2.withConfig({displayName:"[id]__SectionTitle",componentId:"sc-92ba114d-10"})`
  margin: 0;
  font-size: 1.3rem;
`,g=i.default.p.withConfig({displayName:"[id]__SectionText",componentId:"sc-92ba114d-11"})`
  color: #c9c9c9;
  line-height: 1.8;
  margin: 0;
`,_=i.default.aside.withConfig({displayName:"[id]__Sidebar",componentId:"sc-92ba114d-12"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,b=i.default.div.withConfig({displayName:"[id]__Card",componentId:"sc-92ba114d-13"})`
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
`,x=i.default.h3.withConfig({displayName:"[id]__CardTitle",componentId:"sc-92ba114d-14"})`
  margin: 0 0 16px;
  font-size: 1.1rem;
`,v=i.default.div.withConfig({displayName:"[id]__TagContainer",componentId:"sc-92ba114d-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,j=i.default.span.withConfig({displayName:"[id]__Tag",componentId:"sc-92ba114d-16"})`
  font-size: 0.85rem;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #d0d0d0;
`,w=(0,i.default)(o.default).withConfig({displayName:"[id]__CategoryLink",componentId:"sc-92ba114d-17"})`
  display: inline-block;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`,S=i.default.div.withConfig({displayName:"[id]__RelatedProjects",componentId:"sc-92ba114d-18"})`
  display: grid;
  gap: 12px;
`,C=(0,i.default)(o.default).withConfig({displayName:"[id]__RelatedProjectLink",componentId:"sc-92ba114d-19"})`
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;e.s(["__N_SSG",0,!0,"default",0,function({project:e,category:o,relatedProjects:i}){let k=t.default.env.NEXT_PUBLIC_BASE_URL||"https://spacecorp.com",E=`${k}/projects/${e.id}`,T={"@context":"https://schema.org","@type":"CreativeWork",name:e.title,description:e.longDescription,image:e.image?`${k}${e.image}`:void 0,datePublished:e?.date||null,creator:{"@type":"Organization",name:"Space Corp",url:k},keywords:e.tags.join(", "),inLanguage:"en-US"};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:`${e.title} | Space Corp Projects`}),(0,n.jsx)("meta",{name:"description",content:e.longDescription||e.description}),(0,n.jsx)("meta",{name:"keywords",content:e.tags.join(", ")}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:E}),(0,n.jsx)("meta",{property:"og:title",content:`${e.title} | Space Corp`}),(0,n.jsx)("meta",{property:"og:description",content:e.longDescription||e.description}),e.image&&(0,n.jsx)("meta",{property:"og:image",content:`${k}${e.image}`}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:`${e.title} | Space Corp`}),(0,n.jsx)("meta",{name:"twitter:description",content:e.longDescription||e.description}),e.image&&(0,n.jsx)("meta",{name:"twitter:image",content:`${k}${e.image}`}),(0,n.jsx)("link",{rel:"canonical",href:E}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(T)}}),(0,n.jsx)("meta",{name:"robots",content:"index, follow"}),(0,n.jsx)("meta",{name:"author",content:"Space Corp"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,n.jsxs)(a,{children:[(0,n.jsx)(s,{href:"/projects",children:"← Back to projects"}),(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{children:e.title}),(0,n.jsx)(l,{children:(0,n.jsx)(d,{children:o.title})})]}),e.image&&(0,n.jsx)(f,{src:e.image,alt:e.title}),(0,n.jsxs)(p,{children:[(0,n.jsxs)(m,{children:[(0,n.jsxs)(y,{children:[(0,n.jsx)(h,{children:"About"}),(0,n.jsx)(g,{children:e.longDescription})]}),(0,n.jsxs)(y,{children:[(0,n.jsx)(h,{children:"Category"}),(0,n.jsx)("div",{children:(0,n.jsx)(w,{href:`/projects#${e.category}`,children:o.title})})]})]}),(0,n.jsxs)(_,{children:[(0,n.jsxs)(b,{children:[(0,n.jsx)(x,{children:"Tags"}),(0,n.jsx)(v,{children:e.tags.map(e=>(0,n.jsx)(j,{children:e},e))})]}),i.length>0&&(0,n.jsxs)(b,{children:[(0,n.jsx)(x,{children:"Related Projects"}),(0,n.jsx)(S,{children:i.map(e=>(0,n.jsx)(C,{href:`/projects/${e.id}`,children:e.title},e.id))})]})]})]})]})]})}])},7185,(e,t,n)=>{let r="/projects/[id]";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(8953)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},7341,e=>{e.v(t=>Promise.all(["static/chunks/39qei6qsfvzxq.js"].map(t=>e.l(t))).then(()=>t(5104)))},7392,e=>{e.v(t=>Promise.all(["static/chunks/0lupbz8x04n4b.js"].map(t=>e.l(t))).then(()=>t(9905)))}]);