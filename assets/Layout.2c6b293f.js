import{f as m,h as e,T as i,m as u,g as p,n as d,p as c,q as v,r as s,s as f,v as g}from"./app.154ab42d.js";import{S as b}from"./SkipLink.36dde813.js";var y=m({name:"FadeSlideY",setup(l,{slots:a}){const n=u(),r=n.resolve,t=n.pending;return()=>e(i,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:r,onBeforeLeave:t},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),S=m({name:"Layout",setup(){const l=f(),a=p(),n=g(),r=d(),t=c(),o=v(()=>a.value.blog.sidebarDisplay||l.value.blog.sidebarDisplay||"mobile");return()=>[e(b),e(s("CommonWrapper"),{},{default:()=>r.value.home?e(s("HomePage")):e(y,()=>e(s("NormalPage"),{key:n.value.path})),...o.value!=="none"?{navScreenBottom:()=>e(s("BloggerInfo"))}:{},...!t.value&&o.value==="always"?{sidebar:()=>e(s("BloggerInfo"))}:{}})]}});export{S as default};
