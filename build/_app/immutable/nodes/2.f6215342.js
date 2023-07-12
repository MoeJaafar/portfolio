import{S as $t,i as vt,s as yt,e as at,b as lt,H as ot,h as Z,o as gt,k as G,a as tt,q as et,l as Q,m as X,c as nt,r as rt,J as ut,n as A,G as E,u as st}from"../chunks/index.472b9089.js";var dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ht(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var mt={exports:{}};(function(p,d){(function(o,u){p.exports=u()})(dt,function(){var o=1e3,u=6e4,g=36e5,$="millisecond",D="second",S="minute",T="hour",f="day",y="week",h="month",L="quarter",H="year",b="date",I="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},x=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},W={s:x,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+x(r,2,"0")+":"+x(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,h),i=t-e<0,a=n.clone().add(r+(i?-1:1),h);return+(-(r+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:h,y:H,w:y,d:f,D:b,h:T,m:S,s:D,ms:$,Q:L}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},O="en",Y={};Y[O]=m;var F=function(s){return s instanceof R},P=function s(n,t,r){var e;if(!n)return O;if(typeof n=="string"){var i=n.toLowerCase();Y[i]&&(e=i),t&&(Y[i]=t,e=i);var a=n.split("-");if(!e&&a.length>1)return s(a[0])}else{var l=n.name;Y[l]=n,e=l}return!r&&e&&(O=e),e||!r&&O},_=function(s,n){if(F(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new R(t)},c=W;c.l=P,c.i=F,c.w=function(s,n){return _(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var R=function(){function s(t){this.$L=P(t.locale,null,!0),this.parse(t)}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(c.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(N);if(a){var l=a[2]-1||0,v=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],l,a[3]||1,a[4]||0,a[5]||0,a[6]||0,v)):new Date(a[1],l,a[3]||1,a[4]||0,a[5]||0,a[6]||0,v)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==I},n.isSame=function(t,r){var e=_(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return _(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<_(t)},n.$g=function(t,r,e){return c.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!c.u(r)||r,a=c.p(t),l=function(q,j){var U=c.w(e.$u?Date.UTC(e.$y,j,q):new Date(e.$y,j,q),e);return i?U:U.endOf(f)},v=function(q,j){return c.w(e.toDate()[q].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(j)),e)},w=this.$W,k=this.$M,C=this.$D,V="set"+(this.$u?"UTC":"");switch(a){case H:return i?l(1,0):l(31,11);case h:return i?l(1,k):l(0,k+1);case y:var J=this.$locale().weekStart||0,z=(w<J?w+7:w)-J;return l(i?C-z:C+(6-z),k);case f:case b:return v(V+"Hours",0);case T:return v(V+"Minutes",1);case S:return v(V+"Seconds",2);case D:return v(V+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=c.p(t),a="set"+(this.$u?"UTC":""),l=(e={},e[f]=a+"Date",e[b]=a+"Date",e[h]=a+"Month",e[H]=a+"FullYear",e[T]=a+"Hours",e[S]=a+"Minutes",e[D]=a+"Seconds",e[$]=a+"Milliseconds",e)[i],v=i===f?this.$D+(r-this.$W):r;if(i===h||i===H){var w=this.clone().set(b,1);w.$d[l](v),w.init(),this.$d=w.set(b,Math.min(this.$D,w.daysInMonth())).$d}else l&&this.$d[l](v);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[c.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var a=c.p(r),l=function(k){var C=_(i);return c.w(C.date(C.date()+Math.round(k*t)),i)};if(a===h)return this.set(h,this.$M+t);if(a===H)return this.set(H,this.$y+t);if(a===f)return l(1);if(a===y)return l(7);var v=(e={},e[S]=u,e[T]=g,e[D]=o,e)[a]||1,w=this.$d.getTime()+t*v;return c.w(w,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||I;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=c.z(this),l=this.$H,v=this.$m,w=this.$M,k=e.weekdays,C=e.months,V=e.meridiem,J=function(j,U,B,K){return j&&(j[U]||j(r,i))||B[U].slice(0,K)},z=function(j){return c.s(l%12||12,j,"0")},q=V||function(j,U,B){var K=j<12?"AM":"PM";return B?K.toLowerCase():K};return i.replace(M,function(j,U){return U||function(B){switch(B){case"YY":return String(r.$y).slice(-2);case"YYYY":return c.s(r.$y,4,"0");case"M":return w+1;case"MM":return c.s(w+1,2,"0");case"MMM":return J(e.monthsShort,w,C,3);case"MMMM":return J(C,w);case"D":return r.$D;case"DD":return c.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return J(e.weekdaysMin,r.$W,k,2);case"ddd":return J(e.weekdaysShort,r.$W,k,3);case"dddd":return k[r.$W];case"H":return String(l);case"HH":return c.s(l,2,"0");case"h":return z(1);case"hh":return z(2);case"a":return q(l,v,!0);case"A":return q(l,v,!1);case"m":return String(v);case"mm":return c.s(v,2,"0");case"s":return String(r.$s);case"ss":return c.s(r.$s,2,"0");case"SSS":return c.s(r.$ms,3,"0");case"Z":return a}return null}(j)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,a=this,l=c.p(r),v=_(t),w=(v.utcOffset()-this.utcOffset())*u,k=this-v,C=function(){return c.m(a,v)};switch(l){case H:i=C()/12;break;case h:i=C();break;case L:i=C()/3;break;case y:i=(k-w)/6048e5;break;case f:i=(k-w)/864e5;break;case T:i=k/g;break;case S:i=k/u;break;case D:i=k/o;break;default:i=k}return e?i:c.a(i)},n.daysInMonth=function(){return this.endOf(h).$D},n.$locale=function(){return Y[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=P(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),it=R.prototype;return _.prototype=it,[["$ms",$],["$s",D],["$m",S],["$H",T],["$W",f],["$M",h],["$y",H],["$D",b]].forEach(function(s){it[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),_.extend=function(s,n){return s.$i||(s(n,R,_),s.$i=!0),_},_.locale=P,_.isDayjs=F,_.unix=function(s){return _(1e3*s)},_.en=Y[O],_.Ls=Y,_.p={},_})})(mt);var Mt=mt.exports;const ct=ht(Mt);var pt={exports:{}};(function(p,d){(function(o,u){p.exports=u()})(dt,function(){return function(o,u,g){o=o||{};var $=u.prototype,D={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function S(f,y,h,L){return $.fromToBase(f,y,h,L)}g.en.relativeTime=D,$.fromToBase=function(f,y,h,L,H){for(var b,I,N,M=h.$locale().relativeTime||D,m=o.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],x=m.length,W=0;W<x;W+=1){var O=m[W];O.d&&(b=L?g(f).diff(h,O.d,!0):h.diff(f,O.d,!0));var Y=(o.rounding||Math.round)(Math.abs(b));if(N=b>0,Y<=O.r||!O.r){Y<=1&&W>0&&(O=m[W-1]);var F=M[O.l];H&&(Y=H(""+Y)),I=typeof F=="string"?F.replace("%d",Y):F(Y,y,O.l,N);break}}if(y)return I;var P=N?M.future:M.past;return typeof P=="function"?P(I):P.replace("%s",I)},$.to=function(f,y){return S(f,y,this,!0)},$.from=function(f,y){return S(f,y,this)};var T=function(f){return f.$u?g.utc():g()};$.toNow=function(f){return this.to(T(this),f)},$.fromNow=function(f){return this.from(T(this),f)}}})})(pt);var _t=pt.exports;const wt=ht(_t);function ft(p){let d,o,u,g,$,D,S=p[0].safe_title+"",T,f,y,h=p[0].alt+"",L,H,b,I=p[1](p[0])+"",N;return{c(){d=G("div"),o=G("img"),$=tt(),D=G("h2"),T=et(S),f=tt(),y=G("p"),L=et(h),H=tt(),b=G("p"),N=et(I),this.h()},l(M){d=Q(M,"DIV",{class:!0});var m=X(d);o=Q(m,"IMG",{src:!0,alt:!0,class:!0}),$=nt(m),D=Q(m,"H2",{class:!0});var x=X(D);T=rt(x,S),x.forEach(Z),f=nt(m),y=Q(m,"P",{class:!0});var W=X(y);L=rt(W,h),W.forEach(Z),H=nt(m),b=Q(m,"P",{class:!0});var O=X(b);N=rt(O,I),O.forEach(Z),m.forEach(Z),this.h()},h(){ut(o.src,u=p[0].img)||A(o,"src",u),A(o,"alt",g=p[0].alt),A(o,"class","comic-image svelte-16gp47h"),A(D,"class","comic-title svelte-16gp47h"),A(y,"class","comic-alt svelte-16gp47h"),A(b,"class","comic-date svelte-16gp47h"),A(d,"class","comic-container")},m(M,m){lt(M,d,m),E(d,o),E(d,$),E(d,D),E(D,T),E(d,f),E(d,y),E(y,L),E(d,H),E(d,b),E(b,N)},p(M,m){m&1&&!ut(o.src,u=M[0].img)&&A(o,"src",u),m&1&&g!==(g=M[0].alt)&&A(o,"alt",g),m&1&&S!==(S=M[0].safe_title+"")&&st(T,S),m&1&&h!==(h=M[0].alt+"")&&st(L,h),m&1&&I!==(I=M[1](M[0])+"")&&st(N,I)},d(M){M&&Z(d)}}}function Dt(p){let d,o=p[0]&&ft(p);return{c(){o&&o.c(),d=at()},l(u){o&&o.l(u),d=at()},m(u,g){o&&o.m(u,g),lt(u,d,g)},p(u,[g]){u[0]?o?o.p(u,g):(o=ft(u),o.c(),o.m(d.parentNode,d)):o&&(o.d(1),o=null)},i:ot,o:ot,d(u){o&&o.d(u),u&&Z(d)}}}function St(p,d,o){ct.extend(wt);let u;gt(async()=>{const $=new URLSearchParams;$.append("email","m.jaafar@innopolis.university");const S=await(await fetch("https://fwd.innopolis.app/api/hw2?"+$.toString())).json(),T=await fetch("https://fwd.innopolis.university/api/comic?id="+S);o(0,u=await T.json())});function g($){return ct().set("year",parseInt($.year)).set("month",parseInt($.month)-1).set("date",parseInt($.day)).fromNow()}return[u,g]}class Ot extends $t{constructor(d){super(),vt(this,d,St,Dt,yt,{})}}export{Ot as component};