import{s as A,c as F,u as J,g as K,d as N,n as V}from"../chunks/scheduler.e108d1fd.js";import{S as j,i as G,g as u,h,j as I,f as r,k as b,a as f,y as B,d as P,t as T,s as $,m as O,r as M,z as Q,c as x,n as R,x as C,u as S,v as E,w as L}from"../chunks/index.f227a42f.js";import{c as H}from"../chunks/config.3a390a09.js";function U(m){let e,n,i;const l=m[2].default,a=F(l,m,m[1],null);return{c(){e=u("a"),n=u("div"),a&&a.c(),this.h()},l(t){e=h(t,"A",{href:!0});var o=I(e);n=h(o,"DIV",{class:!0});var v=I(n);a&&a.l(v),v.forEach(r),o.forEach(r),this.h()},h(){b(n,"class","mb-4 p-4 rounded-md bg-base-300 hover:bg-base-200 border border-transparent hover:border-accent transition-all active:scale-95"),b(e,"href",m[0])},m(t,o){f(t,e,o),B(e,n),a&&a.m(n,null),i=!0},p(t,[o]){a&&a.p&&(!i||o&2)&&J(a,l,t,t[1],i?N(l,t[1],o,null):K(t[1]),null),(!i||o&1)&&b(e,"href",t[0])},i(t){i||(P(a,t),i=!0)},o(t){T(a,t),i=!1},d(t){t&&r(e),a&&a.d(t)}}}function W(m,e,n){let{$$slots:i={},$$scope:l}=e,{href:a}=e;return m.$$set=t=>{"href"in t&&n(0,a=t.href),"$$scope"in t&&n(1,l=t.$$scope)},[a,l,i]}class q extends j{constructor(e){super(),G(this,e,W,U,A,{href:0})}}function X(m){let e,n="Data Statistics",i,l,a="Data Statistics tool swiftly computes key metrics like <b>mean</b>, <b>median</b>, <b>mode</b>, <b>percentiles</b>, <b>quartiles</b>, and <b>deciles</b>, providing a clear snapshot of your dataset&#39;s characteristics.";return{c(){e=u("h2"),e.textContent=n,i=$(),l=u("p"),l.innerHTML=a,this.h()},l(t){e=h(t,"H2",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-afvdcl"&&(e.textContent=n),i=x(t),l=h(t,"P",{"data-svelte-h":!0}),C(l)!=="svelte-1o5773g"&&(l.innerHTML=a),this.h()},h(){b(e,"class","text-2xl text-accent font-semibold")},m(t,o){f(t,e,o),f(t,i,o),f(t,l,o)},p:V,d(t){t&&(r(e),r(i),r(l))}}}function Y(m){let e,n="Permutation & Combination",i,l,a="Permutation and Combination tool effortlessly calculates the myriad ways elements can be arranged or combined.";return{c(){e=u("h2"),e.textContent=n,i=$(),l=u("p"),l.textContent=a,this.h()},l(t){e=h(t,"H2",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-edziez"&&(e.textContent=n),i=x(t),l=h(t,"P",{"data-svelte-h":!0}),C(l)!=="svelte-1ia0xmq"&&(l.textContent=a),this.h()},h(){b(e,"class","text-2xl text-accent font-semibold")},m(t,o){f(t,e,o),f(t,i,o),f(t,l,o)},p:V,d(t){t&&(r(e),r(i),r(l))}}}function Z(m){let e,n,i=H.name+"",l,a,t,o=`Hey! So, I was in school learning math, and it hit me: I could totally make life easier with
  a little coding magic. As luck would have it, I&#39;m also a web developer, so I whipped up this sweet website on
  <a href="${H.github}" target="_blank" class="link link-accent">Github</a>.
  It&#39;s my way of making stats and number crunching a piece of cake. Dive in, check it out!`,v,d,z="Tools",w,_,k,p,y;return document.title=H.name,_=new q({props:{href:"./data-statistics",$$slots:{default:[X]},$$scope:{ctx:m}}}),p=new q({props:{href:"./permutation-combination",$$slots:{default:[Y]},$$scope:{ctx:m}}}),{c(){e=$(),n=u("h1"),l=O(i),a=$(),t=u("p"),t.innerHTML=o,v=$(),d=u("div"),d.textContent=z,w=$(),M(_.$$.fragment),k=$(),M(p.$$.fragment),this.h()},l(s){Q("svelte-1tsltzm",document.head).forEach(r),e=x(s),n=h(s,"H1",{class:!0});var g=I(n);l=R(g,i),g.forEach(r),a=x(s),t=h(s,"P",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-1fmbtcz"&&(t.innerHTML=o),v=x(s),d=h(s,"DIV",{class:!0,"data-svelte-h":!0}),C(d)!=="svelte-f00b4h"&&(d.textContent=z),w=x(s),S(_.$$.fragment,s),k=x(s),S(p.$$.fragment,s),this.h()},h(){b(n,"class","mb-3 text-5xl text-accent font-medium"),b(t,"class","mb-3"),b(d,"class","divider my-7")},m(s,c){f(s,e,c),f(s,n,c),B(n,l),f(s,a,c),f(s,t,c),f(s,v,c),f(s,d,c),f(s,w,c),E(_,s,c),f(s,k,c),E(p,s,c),y=!0},p(s,[c]){const g={};c&1&&(g.$$scope={dirty:c,ctx:s}),_.$set(g);const D={};c&1&&(D.$$scope={dirty:c,ctx:s}),p.$set(D)},i(s){y||(P(_.$$.fragment,s),P(p.$$.fragment,s),y=!0)},o(s){T(_.$$.fragment,s),T(p.$$.fragment,s),y=!1},d(s){s&&(r(e),r(n),r(a),r(t),r(v),r(d),r(w),r(k)),L(_,s),L(p,s)}}}class at extends j{constructor(e){super(),G(this,e,null,Z,A,{})}}export{at as component};