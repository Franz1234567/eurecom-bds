import{D as se,S as R,i as q,s as B,e as v,k as A,c as p,a as m,m as I,d,b as _,g as x,F as i,G as j,H as ae,I as O,J as le,K as G,L as re,t as D,h as L,w as M,x as U,M as H,y as Y,q as C,o as T,N as ne,B as z,O as ce,P as oe,Q as ie,R as ue}from"../chunks/vendor-7851305b.js";import{b as te}from"../chunks/paths-4b3c6e7e.js";const V=se(!1),he=l=>{const e=t=>{l&&!l.contains(t.target)&&!t.defaultPrevented&&l.dispatchEvent(new CustomEvent("click_outside",l))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}};function fe(l){let e,t,s,r,h,n,o,E,g,$,k;return{c(){e=v("div"),t=v("label"),s=v("input"),r=A(),h=v("span"),n=A(),o=v("span"),E=A(),g=v("span"),this.h()},l(b){e=p(b,"DIV",{class:!0});var u=m(e);t=p(u,"LABEL",{for:!0,class:!0});var a=m(t);s=p(a,"INPUT",{type:!0,id:!0,class:!0}),r=I(a),h=p(a,"SPAN",{class:!0}),m(h).forEach(d),n=I(a),o=p(a,"SPAN",{class:!0}),m(o).forEach(d),E=I(a),g=p(a,"SPAN",{class:!0}),m(g).forEach(d),a.forEach(d),u.forEach(d),this.h()},h(){_(s,"type","checkbox"),_(s,"id","check"),_(s,"class","svelte-1waufwc"),_(h,"class","svelte-1waufwc"),_(o,"class","svelte-1waufwc"),_(g,"class","svelte-1waufwc"),_(t,"for","check"),_(t,"class","svelte-1waufwc"),_(e,"class","sidebar-toggle svelte-1waufwc")},m(b,u){x(b,e,u),i(e,t),i(t,s),s.checked=l[0],i(t,r),i(t,h),i(t,n),i(t,o),i(t,E),i(t,g),$||(k=[j(s,"change",l[2]),ae(he.call(null,e)),j(e,"click_outside",l[1])],$=!0)},p(b,[u]){u&1&&(s.checked=b[0])},i:O,o:O,d(b){b&&d(e),$=!1,le(k)}}}function de(l,e,t){let s;G(l,V,n=>t(0,s=n));const r=()=>{s&&re(V,s=!1,s)};function h(){s=this.checked,V.set(s)}return[s,r,h]}class _e extends R{constructor(e){super();q(this,e,de,fe,B,{})}}const W=[{title:"Home",url:"/"},{title:"About",url:"/about"},{title:"Contact",url:"/contact"}],F="Yuyutsu",X="All rights reserved";function ve(l){let e,t,s,r,h;return{c(){e=v("p"),t=D("\xA9 "),s=D(l[0]),r=D(". "),h=D(X),this.h()},l(n){e=p(n,"P",{class:!0});var o=m(e);t=L(o,"\xA9 "),s=L(o,l[0]),r=L(o,". "),h=L(o,X),o.forEach(d),this.h()},h(){_(e,"class","svelte-1ska8zb")},m(n,o){x(n,e,o),i(e,t),i(e,s),i(e,r),i(e,h)},p:O,i:O,o:O,d(n){n&&d(e)}}}function pe(l){return[new Date().getFullYear()]}class me extends R{constructor(e){super();q(this,e,pe,ve,B,{})}}function Z(l,e,t){const s=l.slice();return s[1]=e[t].title,s[2]=e[t].url,s}function ee(l){let e,t,s=l[1]+"",r,h;return{c(){e=v("li"),t=v("a"),r=D(s),this.h()},l(n){e=p(n,"LI",{});var o=m(e);t=p(o,"A",{href:!0,class:!0});var E=m(t);r=L(E,s),E.forEach(d),o.forEach(d),this.h()},h(){_(t,"href",h=""+(te+l[2])),_(t,"class","svelte-1cxyh7b")},m(n,o){x(n,e,o),i(e,t),i(t,r)},p:O,d(n){n&&d(e)}}}function ge(l){let e,t,s,r,h,n,o,E,g,$,k,b=W,u=[];for(let a=0;a<b.length;a+=1)u[a]=ee(Z(l,b,a));return $=new me({}),{c(){e=v("div"),t=v("div"),s=v("h1"),r=D(F),h=A(),n=v("nav"),o=v("ul");for(let a=0;a<u.length;a+=1)u[a].c();E=A(),g=v("div"),M($.$$.fragment),this.h()},l(a){e=p(a,"DIV",{class:!0});var w=m(e);t=p(w,"DIV",{class:!0});var c=m(t);s=p(c,"H1",{class:!0});var f=m(s);r=L(f,F),f.forEach(d),c.forEach(d),h=I(w),n=p(w,"NAV",{class:!0});var y=m(n);o=p(y,"UL",{});var S=m(o);for(let N=0;N<u.length;N+=1)u[N].l(S);S.forEach(d),y.forEach(d),E=I(w),g=p(w,"DIV",{class:!0});var P=m(g);U($.$$.fragment,P),P.forEach(d),w.forEach(d),this.h()},h(){_(s,"class","svelte-1cxyh7b"),_(t,"class","wrapper svelte-1cxyh7b"),_(n,"class","svelte-1cxyh7b"),_(g,"class","wrapper svelte-1cxyh7b"),_(e,"class","sidebar svelte-1cxyh7b"),H(e,"show",l[0])},m(a,w){x(a,e,w),i(e,t),i(t,s),i(s,r),i(e,h),i(e,n),i(n,o);for(let c=0;c<u.length;c+=1)u[c].m(o,null);i(e,E),i(e,g),Y($,g,null),k=!0},p(a,[w]){if(w&0){b=W;let c;for(c=0;c<b.length;c+=1){const f=Z(a,b,c);u[c]?u[c].p(f,w):(u[c]=ee(f),u[c].c(),u[c].m(o,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=b.length}w&1&&H(e,"show",a[0])},i(a){k||(C($.$$.fragment,a),k=!0)},o(a){T($.$$.fragment,a),k=!1},d(a){a&&d(e),ne(u,a),z($)}}}function $e(l,e,t){let s;return G(l,V,r=>t(0,s=r)),[s]}class be extends R{constructor(e){super();q(this,e,$e,ge,B,{})}}function Ee(l){let e,t,s,r,h,n,o,E,g,$,k,b,u,a;t=new be({}),h=new _e({});const w=l[2].default,c=ce(w,l,l[1],null);return{c(){e=v("div"),M(t.$$.fragment),s=A(),r=v("main"),M(h.$$.fragment),n=A(),o=v("div"),E=v("header"),g=v("a"),$=v("h1"),k=D(F),b=A(),u=v("article"),c&&c.c(),this.h()},l(f){e=p(f,"DIV",{class:!0});var y=m(e);U(t.$$.fragment,y),s=I(y),r=p(y,"MAIN",{class:!0});var S=m(r);U(h.$$.fragment,S),n=I(S),o=p(S,"DIV",{class:!0});var P=m(o);E=p(P,"HEADER",{class:!0});var N=m(E);g=p(N,"A",{href:!0,class:!0});var J=m(g);$=p(J,"H1",{class:!0});var K=m($);k=L(K,F),K.forEach(d),J.forEach(d),N.forEach(d),P.forEach(d),b=I(S),u=p(S,"ARTICLE",{class:!0});var Q=m(u);c&&c.l(Q),Q.forEach(d),S.forEach(d),y.forEach(d),this.h()},h(){_($,"class","svelte-bm2ovi"),_(g,"href",te+"/"),_(g,"class","svelte-bm2ovi"),_(E,"class","container svelte-bm2ovi"),_(o,"class","header-container svelte-bm2ovi"),_(u,"class","container svelte-bm2ovi"),_(r,"class","svelte-bm2ovi"),H(r,"show",l[0]),_(e,"class","wrapper overflow-hidden svelte-bm2ovi")},m(f,y){x(f,e,y),Y(t,e,null),i(e,s),i(e,r),Y(h,r,null),i(r,n),i(r,o),i(o,E),i(E,g),i(g,$),i($,k),i(r,b),i(r,u),c&&c.m(u,null),a=!0},p(f,[y]){c&&c.p&&(!a||y&2)&&oe(c,w,f,f[1],a?ue(w,f[1],y,null):ie(f[1]),null),y&1&&H(r,"show",f[0])},i(f){a||(C(t.$$.fragment,f),C(h.$$.fragment,f),C(c,f),a=!0)},o(f){T(t.$$.fragment,f),T(h.$$.fragment,f),T(c,f),a=!1},d(f){f&&d(e),z(t),z(h),c&&c.d(f)}}}function we(l,e,t){let s;G(l,V,n=>t(0,s=n));let{$$slots:r={},$$scope:h}=e;return l.$$set=n=>{"$$scope"in n&&t(1,h=n.$$scope)},[s,h,r]}class Se extends R{constructor(e){super();q(this,e,we,Ee,B,{})}}export{Se as default};
