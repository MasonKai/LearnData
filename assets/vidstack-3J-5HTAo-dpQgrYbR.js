import{az as c,z as h,e as n,l as a,ai as u,aA as l,k as d}from"./vidstack-Q8NlvF8c-wnQrPx0g.js";function f(r,t=3e3){const i=c();return setTimeout(()=>{const s=r();s&&i.reject(s)},t),i}class g{constructor(t){this.V=h(""),this.referrerPolicy=null,this.oh=t,t.setAttribute("frameBorder","0"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),this.referrerPolicy!==null&&t.setAttribute("referrerpolicy",this.referrerPolicy)}get iframe(){return this.oh}setup(t){n(this.ie.bind(this)),a(window,"message",this.ph.bind(this)),a(this.oh,"load",this.fa.bind(this))}ie(){const t=this.V();if(!t.length){this.oh.setAttribute("src","");return}const i=u(()=>this.ea());this.oh.setAttribute("src",l(t,i))}Y(t,i){var s;(s=this.oh.contentWindow)==null||s.postMessage(JSON.stringify(t),i??"*")}ph(t){var o;const i=this.P();if(t.source===((o=this.oh)==null?void 0:o.contentWindow)&&(!d(i)||i===t.origin)){try{const e=JSON.parse(t.data);e&&this.ka(e,t);return}catch{}t.data&&this.ka(t.data,t)}}}export{g as E,f as t};
