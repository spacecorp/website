(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4891,(e,t,r)=>{var n={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var c=[],s=!1,l=-1;function f(){s&&n&&(s=!1,n.length?c=n.concat(c):l=-1,c.length&&p())}function p(){if(!s){var e=u(f);s=!0;for(var t=c.length;t;){for(n=c,c=[];++l<t;)n&&n[l].run();l=-1,t=c.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||s||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}},a=!0;try{n[e](r,r.exports,i),a=!1}finally{a&&delete o[e]}return r.exports}i.ab="/ROOT/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next/dist/compiled/process/",t.exports=i(229)},6246,(e,t,r)=>{"use strict";var n,o;t.exports=(null==(n=e.g.process)?void 0:n.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(4891)},6982,(e,t,r)=>{"use strict";var n=Symbol.for("react.transitional.element");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return{$$typeof:n,type:e,key:o,ref:void 0!==(t=r.ref)?t:null,props:r}}r.Fragment=Symbol.for("react.fragment"),r.jsx=o,r.jsxs=o},8946,(e,t,r)=>{"use strict";t.exports=e.r(6982)},5281,(e,t,r)=>{"use strict";var n=e.i(6246),o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),m=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,_={};function g(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||b}function x(){}function j(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||b}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var w=j.prototype=new x;w.constructor=j,v(w,g.prototype),w.isPureReactComponent=!0;var S=Array.isArray;function k(){}var E={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function T(e,t,r){var n=r.ref;return{$$typeof:o,type:e,key:t,ref:void 0!==n?n:null,props:r}}function H(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function P(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function L(e,t,r){if(null==e)return e;var n=[],a=0;return!function e(t,r,n,a,u){var c,s,l,f=typeof t;("undefined"===f||"boolean"===f)&&(t=null);var p=!1;if(null===t)p=!0;else switch(f){case"bigint":case"string":case"number":p=!0;break;case"object":switch(t.$$typeof){case o:case i:p=!0;break;case h:return e((p=t._init)(t._payload),r,n,a,u)}}if(p)return u=u(t),p=""===a?"."+P(t,0):a,S(u)?(n="",null!=p&&(n=p.replace(O,"$&/")+"/"),e(u,r,n,"",function(e){return e})):null!=u&&(H(u)&&(c=u,s=n+(null==u.key||t&&t.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+p,u=T(c.type,s,c.props)),r.push(u)),1;p=0;var d=""===a?".":a+":";if(S(t))for(var y=0;y<t.length;y++)f=d+P(a=t[y],y),p+=e(a,r,n,f,u);else if("function"==typeof(y=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=m&&l[m]||l["@@iterator"])?l:null))for(t=y.call(t),y=0;!(a=t.next()).done;)f=d+P(a=a.value,y++),p+=e(a,r,n,f,u);else if("object"===f){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(k,k):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),r,n,a,u);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}return p}(e,n,"","",function(e){return t.call(r,e,a++)}),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof n.default&&"function"==typeof n.default.emit)return void n.default.emit("uncaughtException",e);console.error(e)};r.Activity=y,r.Children={map:L,forEach:function(e,t,r){L(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return L(e,function(){t++}),t},toArray:function(e){return L(e,function(e){return e})||[]},only:function(e){if(!H(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=a,r.Profiler=c,r.PureComponent=j,r.StrictMode=u,r.Suspense=p,r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,r.__COMPILER_RUNTIME={__proto__:null,c:function(e){return E.H.useMemoCache(e)}},r.cache=function(e){return function(){return e.apply(null,arguments)}},r.cacheSignal=function(){return null},r.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var n=v({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.key&&(o=""+t.key),t)C.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(n[i]=t[i]);var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){for(var a=Array(i),u=0;u<i;u++)a[u]=arguments[u+2];n.children=a}return T(e.type,o,n)},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},r.createElement=function(e,t,r){var n,o={},i=null;if(null!=t)for(n in void 0!==t.key&&(i=""+t.key),t)C.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return T(e,i,o)},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:f,render:e}},r.isValidElement=H,r.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:R}},r.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=E.T,r={};E.T=r;try{var n=e(),o=E.S;null!==o&&o(r,n),"object"==typeof n&&null!==n&&"function"==typeof n.then&&n.then(k,I)}catch(e){I(e)}finally{null!==t&&null!==r.types&&(t.types=r.types),E.T=t}},r.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},r.use=function(e){return E.H.use(e)},r.useActionState=function(e,t,r){return E.H.useActionState(e,t,r)},r.useCallback=function(e,t){return E.H.useCallback(e,t)},r.useContext=function(e){return E.H.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},r.useEffect=function(e,t){return E.H.useEffect(e,t)},r.useEffectEvent=function(e){return E.H.useEffectEvent(e)},r.useId=function(){return E.H.useId()},r.useImperativeHandle=function(e,t,r){return E.H.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},r.useMemo=function(e,t){return E.H.useMemo(e,t)},r.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},r.useReducer=function(e,t,r){return E.H.useReducer(e,t,r)},r.useRef=function(e){return E.H.useRef(e)},r.useState=function(e){return E.H.useState(e)},r.useSyncExternalStore=function(e,t,r){return E.H.useSyncExternalStore(e,t,r)},r.useTransition=function(){return E.H.useTransition()},r.version="19.2.7"},3337,(e,t,r)=>{"use strict";t.exports=e.r(5281)},2879,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},7602,(e,t,r)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}},530,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return n}});let n=e.r(2879)._(e.r(3337)).default.createContext({})},6550,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},9069,(e,t,r)=>{t.exports=e.r(8862)},3115,e=>{"use strict";var t=e.i(8946),r=e.i(4268),n=e.i(9069),o=e.i(7711);let i=r.default.div.withConfig({displayName:"Layout__Shell",componentId:"sc-5ac7e0eb-0"})`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.04), transparent 28%),
    radial-gradient(
      circle at bottom right,
      rgba(255, 255, 255, 0.06),
      transparent 22%
    ),
    #020202;
`,a=r.default.header.withConfig({displayName:"Layout__Header",componentId:"sc-5ac7e0eb-1"})`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(16px);
  background: rgba(0, 0, 0, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 24px 32px;
`,u=r.default.nav.withConfig({displayName:"Layout__Nav",componentId:"sc-5ac7e0eb-2"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`,c=r.default.div.withConfig({displayName:"Layout__Logo",componentId:"sc-5ac7e0eb-3"})`
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.95rem;
  color: #fff;
`,s=r.default.div.withConfig({displayName:"Layout__NavList",componentId:"sc-5ac7e0eb-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`,l=r.default.a.withConfig({displayName:"Layout__NavLink",componentId:"sc-5ac7e0eb-5"})`
  color: ${e=>e.active?"#fff":"#c8c8c8"};
  font-weight: 500;
  transition: color 0.2s ease;
  &:hover {
    color: #fff;
  }
`,f=r.default.main.withConfig({displayName:"Layout__Content",componentId:"sc-5ac7e0eb-6"})`
  flex: 1;
  width: min(1200px, calc(100% - 64px));
  margin: 0 auto;
  padding: 40px 0 60px;
`,p=r.default.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-5ac7e0eb-7"})`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 28px 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
`,d=r.default.div.withConfig({displayName:"Layout__FooterColumn",componentId:"sc-5ac7e0eb-8"})`
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,h=r.default.div.withConfig({displayName:"Layout__FooterLabel",componentId:"sc-5ac7e0eb-9"})`
  font-weight: 700;
  color: #fff;
`,y=r.default.a.withConfig({displayName:"Layout__FooterLink",componentId:"sc-5ac7e0eb-10"})`
  color: inherit;
  opacity: 0.85;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
`;function m({children:e,currentPath:r}){return(0,t.jsxs)(i,{children:[(0,t.jsx)(a,{children:(0,t.jsxs)(u,{children:[(0,t.jsx)(c,{children:"Space Corp"}),(0,t.jsxs)(s,{children:[(0,t.jsx)(o.default,{href:"/",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)(l,{active:"/"===r,children:"Home"})}),(0,t.jsx)(o.default,{href:"/projects",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)(l,{active:"/projects"===r,children:"Projects"})}),(0,t.jsx)(o.default,{href:"/about",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)(l,{active:"/about"===r,children:"About"})}),(0,t.jsx)(o.default,{href:"/contact",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)(l,{active:"/contact"===r,children:"Contact"})})]})]})}),(0,t.jsx)(f,{children:e}),(0,t.jsxs)(p,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(h,{children:"Legal"}),(0,t.jsx)(y,{href:"#",children:"Privacy statement"}),(0,t.jsx)(y,{href:"#",children:"Terms & conditions"})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)(h,{children:"Social"}),(0,t.jsx)(y,{href:"https://twitter.com/spacecorp",target:"_blank",rel:"noreferrer",children:"Twitter"}),(0,t.jsx)(y,{href:"https://linkedin.com/company/spacecorp",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),(0,t.jsx)(y,{href:"https://github.com/spacecorp",target:"_blank",rel:"noreferrer",children:"GitHub"})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)(h,{children:"Company"}),(0,t.jsx)(y,{href:"/projects",children:"Projects"}),(0,t.jsx)(y,{href:"/about",children:"About"}),(0,t.jsx)(y,{href:"/contact",children:"Contact"})]})]})]})}let b=r.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background: #010101;
    color: #f7f7f7;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(180deg, #050505 0%, #090909 100%);
    color: #f5f5f5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;e.s(["default",0,function({Component:e,pageProps:r}){let o=(0,n.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{}),(0,t.jsx)(m,{currentPath:o.pathname,children:(0,t.jsx)(e,{...r})})]})}],3115)},8146,(e,t,r)=>{let n="/_app";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(3115)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},7341,e=>{e.v(t=>Promise.all(["static/chunks/02fgpcc78nj52.js"].map(t=>e.l(t))).then(()=>t(5104)))},7392,e=>{e.v(t=>Promise.all(["static/chunks/0lupbz8x04n4b.js"].map(t=>e.l(t))).then(()=>t(9905)))}]);