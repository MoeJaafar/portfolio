import{H as d,s as v}from"./index.472b9089.js";const u=[];function p(t,e=d){let n;const o=new Set;function r(s){if(v(t,s)&&(t=s,n)){const l=!u.length;for(const i of o)i[1](),u.push(i,t);if(l){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function c(s){r(s(t))}function a(s,l=d){const i=[s,l];return o.add(i),o.size===1&&(n=e(r)||d),s(t),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:a}}var g;const T=((g=globalThis.__sveltekit_1xmtrci)==null?void 0:g.base)??"/portfolio";var k;const E=((k=globalThis.__sveltekit_1xmtrci)==null?void 0:k.assets)??"https://moejaafar.github.io/portfolio",w="1689151808756",x="sveltekit:snapshot",y="sveltekit:scroll",I="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function U(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const b={..._,"":_.hover};function m(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function L(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=m(t)}}function N(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,r=!n||!!o||R(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&t.hasAttribute("download");return{url:n,external:r,target:o,download:c}}function P(t){let e=null,n=null,o=null,r=null,c=null,a=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),e===null&&(e=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),c===null&&(c=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=m(s);function l(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:l(e),noscroll:l(n),reload:l(c),replace_state:l(a)}}function h(t){const e=p(t);let n=!0;function o(){n=!0,e.update(a=>a)}function r(a){n=!1,e.set(a)}function c(a){let s;return e.subscribe(l=>{(s===void 0||n&&l!==s)&&a(s=l)})}return{notify:o,set:r,subscribe:c}}function A(){const{set:t,subscribe:e}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==w;return a&&(t(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:e,check:o}}function R(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}function V(t){t.client}const Y={url:h({}),page:h({}),navigating:p(null),updated:A()};export{I,_ as P,y as S,x as a,N as b,P as c,Y as d,T as e,L as f,O as g,V as h,R as i,U as s};
