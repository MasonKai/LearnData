"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7445],{7714:(e,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-3b0b9f28","path":"/web/VuePress.html","title":"VuePress","lang":"zh-CN","frontmatter":{"article":false,"title":"VuePress","order":1,"summary":"VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。 如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能转为 VuePress。不过，VuePress 网站需要依赖包环境，生成的静态文件在本","head":[["meta",{"property":"og:url","content":"https://newzone.top/web/VuePress.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"VuePress"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-27T09:49:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"插件","slug":"插件","children":[]},{"level":2,"title":"初始配置","slug":"初始配置","children":[]},{"level":2,"title":"固定文件名","slug":"固定文件名","children":[]},{"level":2,"title":"关闭 prefetch","slug":"关闭-prefetch","children":[]},{"level":2,"title":"自定义主题","slug":"自定义主题","children":[]}],"git":{"createdTime":1658511538000,"updatedTime":1658915394000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":20}]},"readingTime":{"minutes":6.09,"words":1827},"filePathRelative":"web/VuePress.md","localizedDate":"2022年7月22日"}')},2752:(e,s,a)=>{a.r(s),a.d(s,{default:()=>ls});var t=a(8e3);const l={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},n=(0,t.Uk)("VuePress"),i=(0,t.Uk)(" 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。"),c=(0,t._)("p",null,"如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能转为 VuePress。不过，VuePress 网站需要依赖包环境，生成的静态文件在本地运行会缺少组件，只推荐在服务器或其他云服务上运行。",-1),o=(0,t.Uk)("主题使用的是 "),r={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("vuepress-theme-hope"),d=(0,t.Uk)("，其他主题和插件查看 "),k={href:"https://github.com/vuepress/awesome-vuepress/blob/main/v2.md",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("Awesome VuePress V2"),m=(0,t.Uk)("。"),h=(0,t._)("h2",{id:"插件",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),(0,t.Uk)(" 插件")],-1),b={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("docsearch"),v=(0,t.Uk)("：将 Algolia DocSearch 集成到 VuePress 中，为你的文档网站提供搜索功能。开源技术向博客可以申请官方支持，商业化内容需要使用自己的爬虫。"),g={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("Iconfont 精选图标"),x={href:"https://www.npmjs.com/package/vuepress-plugin-helper-live2d",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Uk)("看板娘"),y=(0,t._)("h2",{id:"初始配置",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#初始配置","aria-hidden":"true"},"#"),(0,t.Uk)(" 初始配置")],-1),E=(0,t.Uk)("环境配置：安装 npm、yarn、pnpm，方法查看 "),w=(0,t.Uk)("Linux 环境部署教程"),W=(0,t.Uk)("。"),P=(0,t._)("li",null,[(0,t.Uk)("新建文件夹，然后在该路径下运行命令 "),(0,t._)("code",null,"pnpm create vuepress-theme-hope@next docs"),(0,t.Uk)("。vuepress-theme-hope 主题的样例文件会存储在该路径下。")],-1),V=(0,t._)("li",null,[(0,t.Uk)("执行命令 "),(0,t._)("code",null,"pnpm docs:dev"),(0,t.Uk)(" 启动样例网站。")],-1),A=(0,t._)("code",null,"docs\\.vuepress",-1),B=(0,t.Uk)(" 路径下的 config.ts，navbar.ts，sidebar.ts，theme.ts 可以修改页面属性，设置方法参考 "),z={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress",target:"_blank",rel:"noopener noreferrer"},j=(0,t.Uk)("官方案例"),D=(0,t.Uk)("。 "),M=(0,t._)("ul",null,[(0,t._)("li",null,"config.ts：环境依赖包"),(0,t._)("li",null,"sidebar.ts：侧边栏，集合所有文档的目录"),(0,t._)("li",null,"navbar.ts：导航栏，放最常用的文档链接"),(0,t._)("li",null,"theme.ts：对主题和插件进行设置")],-1),q=(0,t._)("h2",{id:"固定文件名",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#固定文件名","aria-hidden":"true"},"#"),(0,t.Uk)(" 固定文件名")],-1),C=(0,t.Uk)("VuePress v2 默认使用 Vite 打包，文件名会根据 hash 自动生成。这导致打包总会替换网站大部分的文件，自动部署到服务器上需要全部覆盖。即使按 "),T={href:"https://cli.vuejs.org/config/#vue-config-js",target:"_blank",rel:"noopener noreferrer"},H=(0,t.Uk)("vue.config.js"),L=(0,t.Uk)(" 的配置添加 "),N=(0,t._)("code",null,"filenameHashing: false",-1),R=(0,t.Uk)("，但并未停止生成 hashname。"),S=(0,t.Uk)("因此，我把打包工具更换为 "),F={href:"https://v2.vuepress.vuejs.org/zh/guide/bundler.html",target:"_blank",rel:"noopener noreferrer"},Z=(0,t.Uk)("Webpack"),G=(0,t.Uk)("，并用 chainWebpack 设置静态名生成规则。"),I=(0,t.uE)('<li><p>修改 config.ts 的导入设置，将 <code>import { defineUserConfig } from &quot;vuepress&quot;;</code> 替换为 <code>import { defineUserConfig } from &quot;@vuepress/cli&quot;;</code>。</p></li><li><p>Webpack 环境依赖包安装，并运行服务。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#组合命令，打包使用 Webpack</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> vuepress@next vuepress-theme-hope@next <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> remove vuepress <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> <span class="token function">add</span> vuepress-webpack@next sass-loader <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up\n\n<span class="token comment">#运行在本地服务器</span>\n<span class="token function">yarn</span> docs:dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组合命令也能<strong>解决报错</strong>，升级相关依赖包。相关命令的分步解释见下方。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#确保你正在使用最新的 vuepress 和 vuepress-theme-hope 版本</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> vuepress@next vuepress-theme-hope@next\n\n<span class="token comment">#更换打包工具，Webpack 需手动下载 sass-loader</span>\n<span class="token function">pnpm</span> remove vuepress\n<span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-webpack@next sass-loader\n\n<span class="token comment">#常用插件：google-analytics，docsearch</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> @vuepress/plugin-google-analytics@next @vuepress/plugin-docsearch@next\n\n<span class="token comment">#升级当前目录的依赖以确保你的项目只包含单个版本的相关包</span>\n<span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>',2),O=(0,t.Uk)("固定 js 静态文件名：打开 config.ts，使用 "),J={href:"https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans",target:"_blank",rel:"noopener noreferrer"},Y=(0,t.Uk)("webpack-chain"),K=(0,t.Uk)(" 修改 webpack 输出文件名规则，停止对 js 文件 hashname。"),Q=(0,t._)("sup",{class:"footnote-ref"},[(0,t._)("a",{href:"#footnote1"},"[1]"),(0,t._)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),X=(0,t.Uk)(),$=(0,t._)("code",null,".filename",-1),ee=(0,t.Uk)(" 加路径容易报错，因此只把数量最多的 chunk 文件放入子文件夹中。"),se=(0,t.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  bundler<span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">chainWebpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// do not use chunk hash in js</span>\n      <span class="token comment">//参照案例：https://github.com/vuepress/vuepress-plugin-named-chunks/blob/b9fb5a1d3475530b1d74b6616f92a6e3bf14a7ed/__tests__/docs/.vuepress/config.js</span>\n      config<span class="token punctuation">.</span>output\n        <span class="token punctuation">.</span><span class="token function">filename</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[name].js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">chunkFilename</span><span class="token punctuation">(</span><span class="token string">&quot;assets/chunks/[name].js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),ae=(0,t.Uk)("除 hash 文件名外，给文件带来变化的是 "),te={href:"https://vuepress-theme-hope.github.io/v2/seo/zh/guide.html",target:"_blank",rel:"noopener noreferrer"},le=(0,t.Uk)("vuepress-plugin-seo2"),ne=(0,t.Uk)("。它在 html 文件中插入 "),ie=(0,t._)("code",null,"og:updated_time",-1),ce=(0,t.Uk)(" 和 "),oe=(0,t._)("code",null,"article:modified_time",-1),re=(0,t.Uk)("，这两个参数都引用自 "),pe=(0,t._)("code",null,"page.git.updatedTime",-1),de=(0,t.Uk)("，每次同步后该参数都会变化。因此，每次大量文件发生了改变。"),ke=(0,t._)("h2",{id:"关闭-prefetch",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#关闭-prefetch","aria-hidden":"true"},"#"),(0,t.Uk)(" 关闭 prefetch")],-1),ue=(0,t._)("p",null,"preload 是一种声明式的资源获取请求方式，用于提前加载一些需要的依赖，并且不会影响页面的 onload 事件。prefetch 是一种利用浏览器的空闲时间加载页面将来可能用到的资源的一种机制；通常可以用于加载非首页的其他页面所需要的资源，以便加快后续页面的首屏速度。preload 主要用于预加载当前页面需要的资源；而 prefetch 主要用于加载将来页面可能需要的资源。",-1),me=(0,t.Uk)("VuePress "),he={href:"https://vuepress.github.io/zh/reference/config.html#build-%E9%85%8D%E7%BD%AE%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"},be=(0,t.Uk)("Build 配置项"),fe=(0,t.Uk)(" 默认开启了 preload 和 prefetch。但是，开启了 prefetch，所有其它页面所需的文件都会被预拉取。页面较多或服务器宽带后付费的话，建议关闭 prefetch。"),ve=(0,t._)("p",null,[(0,t._)("code",null,"docs\\.vuepress"),(0,t.Uk)(" 路径下的 config.ts 配置中插入 "),(0,t._)("code",null,"shouldPrefetch: false,"),(0,t.Uk)("，即可关闭 prefetch。")],-1),ge=(0,t._)("h2",{id:"自定义主题",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#自定义主题","aria-hidden":"true"},"#"),(0,t.Uk)(" 自定义主题")],-1),_e={class:"task-list-container"},xe={class:"task-list-item"},Ue=(0,t._)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",disabled:"disabled"},null,-1),ye={class:"task-list-item-label",for:"task-item-0"},Ee={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/feature/comment.html#waline",target:"_blank",rel:"noopener noreferrer"},we=(0,t.Uk)("waline"),We=(0,t.Uk)(" 评论插件，无需账户，更适合大众。"),Pe=(0,t.uE)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Algolia DocSearch 申请中，等结果通知</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"><s>google analytics 没反应，实际已经包含在 js 中了</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"><s>不用自动开启一堆的网站，关闭 prefetch</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"><s>生成文件名固定化，chainWebpack</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"><s>网页更新时，有时会打不开链接，需要使用缓存。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"><s>VuePress 博客页面：frontmatter 中添加 order 参数让最新的文章往上排，无法按文件名倒序排列</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 全局路径需要给子目录添加 README.md，没那么多内容填，暂时放弃。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 独立设置页面标题。未成功，所有页面都会加入默认标题。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 侧边栏显示客服图片。icon 位置直接放链接也没用。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 指定页面子标题不被目录页识别。但页面中取消 toc 的话，网页位置会出现偏移。</label></li>',10),Ve={class:"task-list-item"},Ae=(0,t._)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-11",checked:"checked",disabled:"disabled"},null,-1),Be={class:"task-list-item-label",for:"task-item-11"},ze={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/advanced/replace.html#%E6%8F%92%E6%A7%BD%E5%88%A9%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},je=(0,t.Uk)("修改导航栏 brand 链接"),De=(0,t.Uk)("，需用本地文件替代 "),Me={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/src/client/module/navbar/components/NavbarBrand.ts",target:"_blank",rel:"noopener noreferrer"},qe=(0,t.Uk)("主题默认设置"),Ce=(0,t.Uk)("。设置的 ts 未生效，暂时放弃。"),Te=(0,t.uE)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"><s>子域名中部署 blog 和 note，分别使用不同路径。这方案可以与 WordPress 共存，但未了避免后续出错，还是取消了。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-13"><s>Giscus 评论区设置</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-14"><s>导航栏添加 repo 位置</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"><s>页面统计，插件只支持 Google、百度，后用图片标签方式植入统计。备用方法：将统计代码直接放在侧边栏。</s></label></li>',4),He={class:"task-list-item"},Le=(0,t._)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-16",checked:"checked",disabled:"disabled"},null,-1),Ne={class:"task-list-item-label",for:"task-item-16"},Re=(0,t.Uk)("定制页面标签：config.ts 中添加全局 "),Se={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/.vuepress/config.ts",target:"_blank",rel:"noopener noreferrer"},Fe=(0,t.Uk)("head 标签"),Ze=(0,t.Uk)("，或在页面中添加 "),Ge={href:"https://vuepress-theme-hope.github.io/v2/seo/zh/guide.html#%E7%9B%B4%E6%8E%A5%E6%B7%BB%E5%8A%A0-head-%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"},Ie=(0,t.Uk)("独立 head 标签"),Oe=(0,t.Uk)("，支持图片统计代码。"),Je=(0,t.uE)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"><s>将 docs 里的 README.md 转移到主目录中，保持 github 项目页的同步。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-18"><s>打开页面链接，侧边栏焦点能不能也移动过去。侧边栏标题需要能在首屏出现，才能激活焦点。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-19"><s>默认主题颜色为白天，虽然不能切换，但发稿用白色就性。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-20"><s>设置导航栏自动隐藏</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-21"><s>隐藏编辑时间和贡献者</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-22"><s>用 md 控制图片是，图片不能显示。这可能是因为主题默认的 lazy 加载，改用七牛云的图片属性控制尺寸。</s></label></li>',6),Ye=(0,t._)("hr",{class:"footnotes-sep"},null,-1),Ke={class:"footnotes"},Qe={class:"footnotes-list"},Xe={id:"footnote1",class:"footnote-item"},$e={href:"https://blog.csdn.net/song854601134/article/details/121340077",target:"_blank",rel:"noopener noreferrer"},es=(0,t.Uk)("chainWebpack 长用配置方式"),ss=(0,t.Uk)(),as=(0,t._)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),ts={},ls=(0,a(1935).Z)(ts,[["render",function(e,s){const a=(0,t.up)("ExternalLinkIcon"),ts=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("p",null,[(0,t._)("a",l,[n,(0,t.Wm)(a)]),i]),c,(0,t._)("p",null,[o,(0,t._)("a",r,[p,(0,t.Wm)(a)]),d,(0,t._)("a",k,[u,(0,t.Wm)(a)]),m]),h,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",b,[f,(0,t.Wm)(a)]),v]),(0,t._)("li",null,[(0,t._)("a",g,[_,(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",x,[U,(0,t.Wm)(a)])])]),y,(0,t._)("ol",null,[(0,t._)("li",null,[E,(0,t.Wm)(ts,{to:"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2"},{default:(0,t.w5)((()=>[w])),_:1}),W]),P,V,(0,t._)("li",null,[A,B,(0,t._)("a",z,[j,(0,t.Wm)(a)]),D,M])]),q,(0,t._)("p",null,[C,(0,t._)("a",T,[H,(0,t.Wm)(a)]),L,N,R]),(0,t._)("p",null,[S,(0,t._)("a",F,[Z,(0,t.Wm)(a)]),G]),(0,t._)("ol",null,[I,(0,t._)("li",null,[(0,t._)("p",null,[O,(0,t._)("a",J,[Y,(0,t.Wm)(a)]),K,Q,X,$,ee]),se]),(0,t._)("li",null,[(0,t._)("p",null,[ae,(0,t._)("a",te,[le,(0,t.Wm)(a)]),ne,ie,ce,oe,re,pe,de])])]),ke,ue,(0,t._)("p",null,[me,(0,t._)("a",he,[be,(0,t.Wm)(a)]),fe]),ve,ge,(0,t._)("ul",_e,[(0,t._)("li",xe,[Ue,(0,t._)("label",ye,[(0,t._)("a",Ee,[we,(0,t.Wm)(a)]),We])]),Pe,(0,t._)("li",Ve,[Ae,(0,t._)("label",Be,[(0,t._)("a",ze,[je,(0,t.Wm)(a)]),De,(0,t._)("a",Me,[qe,(0,t.Wm)(a)]),Ce])]),Te,(0,t._)("li",He,[Le,(0,t._)("label",Ne,[(0,t._)("s",null,[Re,(0,t._)("a",Se,[Fe,(0,t.Wm)(a)]),Ze,(0,t._)("a",Ge,[Ie,(0,t.Wm)(a)]),Oe])])]),Je]),Ye,(0,t._)("section",Ke,[(0,t._)("ol",Qe,[(0,t._)("li",Xe,[(0,t._)("p",null,[(0,t._)("a",$e,[es,(0,t.Wm)(a)]),ss,as])])])])])}]])},1935:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,t]of s)a[e]=t;return a}}}]);