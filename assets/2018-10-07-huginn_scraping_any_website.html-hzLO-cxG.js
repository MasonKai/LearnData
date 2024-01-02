import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as l,d as t,a as n,b as e,e as i}from"./app-Yf_IFqw3.js";const c={},u=n("p",null,[e("烧制网页 RSS 源，主要有 "),n("strong",null,"FEED43"),e(" 和 "),n("strong",null,"Huginn"),e(" 两种方法。")],-1),d=n("ul",null,[n("li",null,"FEED43：简单免费，六小时抓取一次，每次抓取 20 条静态页面。"),n("li",null,[e("Huginn：自由度高，能自定义"),n("strong",null,"抓取频率、内容结构、js 结果、输出样式"),e("等；需要搭建服务器，学习 Huginn 抓取规则。")])],-1),g=n("h2",{id:"huginn-准备工作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#huginn-准备工作","aria-hidden":"true"},"#"),e(" Huginn 准备工作")],-1),h=n("li",null,[n("p",null,"准备 NAS 或 Debian/Ubuntu 环境的服务器；")],-1),m={href:"https://github.com/huginn/huginn/blob/master/doc/docker/install.md",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/huginn/huginn/blob/master/doc/manual/installation.md",target:"_blank",rel:"noopener noreferrer"},_={href:"https://phantomjscloud.com/",target:"_blank",rel:"noopener noreferrer"},f=n("strong",null,"PhantomJs Cloud",-1),k=n("figure",null,[n("img",{src:"https://img.newzone.top/20181006010447.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),v=i('<h2 id="phantomjs-网页抓取" tabindex="-1"><a class="header-anchor" href="#phantomjs-网页抓取" aria-hidden="true">#</a> PhantomJs 网页抓取</h2><p>新建 Huginn 任务组 Scenario「国内应急新闻」，样例抓取链接为 <code>http://www.cneb.gov.cn/guoneinews/</code>。</p><figure><img src="https://img.newzone.top/20181008131549.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="页面缓存" tabindex="-1"><a class="header-anchor" href="#页面缓存" aria-hidden="true">#</a> 页面缓存</h3><p>使用 Phantom Js Cloud Agent，获得动态网页缓存。</p><figure><img src="https://img.newzone.top/20181008111704.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解析网页内容" tabindex="-1"><a class="header-anchor" href="#解析网页内容" aria-hidden="true">#</a> 解析网页内容</h3><p>使用 WebsiteAgent，抓取网页内容。</p><figure><img src="https://img.newzone.top/20181008112658.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="获取内容路径" tabindex="-1"><a class="header-anchor" href="#获取内容路径" aria-hidden="true">#</a> 获取内容路径</h3><p>使用火狐浏览器打开目标页面，获取 css path 路径。如果你使用的是 Xpath 路径，请将路径中的双引号替换为单引号，或者用反义符 <code>\\</code> 注释掉路径中的双引号。</p><ol><li><p>按下 <code>F12</code>, 然后点击 <em>Developer Tools</em> 左上角的<em>检查指针</em>。</p><figure><img src="https://img.newzone.top/20181008114911.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>选中要抓取的部分。</p><figure><img src="https://img.newzone.top/20181008113925.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>回到 <em>Developer Tools</em> 窗口，右键选中的蓝色部分，获取 css path、Xpath。这里以 css path 为例。</p><figure><img src="https://img.newzone.top/20181008114207.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>初始 css path 路径，<code>html body div.area.areabg1 div.area-half.right div.tabBox div.tabContents.active table tbody tr td.red a</code>。</p></li><li><p>css path 原始路径过长，删去不带 <code>.</code> 或 <code>#</code> 的节点（节点间以空格“ ”分割），并删去每个节点在 <code>.</code> 或 <code>#</code> 前的第一个标签，得到 <code>.area.areabg1 .area-half.right .tabBox .tabContents.active .red a</code>。</p></li><li><p>前半部分对节点定位无用，继续省略（比如：中国上海，省略掉中国，大家也知道上海在哪），获得短路径 <code>.tabContents.active .red a</code>。</p></li></ol><p><strong>特殊路径处理</strong>：</p><ul><li>有些路径中的<strong>节点带空格</strong>，如 <code>&lt;div class=&quot;packery-item article&quot;&gt;</code>,路径中的空格由 <code>.</code> 代替，截取为 <code>.packery-item.article</code>。</li><li>当抓取<strong>多种 css path 规则</strong>时，用逗号分割，比如 <code>&quot;css&quot;: &quot;.focus-title .current a , .stress h2 a&quot;,</code>。</li><li>有时节点路径输入正确，但输出为空。此时，将路径更改为 <code>html</code>，检查源码中是否含有你需要的内容。动态页面直接获取会为空，你需要使用 PhantomJs Cloud 来缓存页面。</li></ul><h3 id="导出-rss" tabindex="-1"><a class="header-anchor" href="#导出-rss" aria-hidden="true">#</a> 导出 RSS</h3><p>使用 DataOutputAgent，将抓取内容导出为 RSS。</p><figure><img src="https://img.newzone.top/20181008130943.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>回到 Scenarios，点击 Data Output Agent 旁的按钮「Actions」&gt;「Show」，复制导出的 xml 链接 <code>http://xxx.xxx/users/1/web_requests/xxx/xxxx.xml</code>。</p><figure><img src="https://img.newzone.top/20181008131059.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',19),q={href:"https://pan.baidu.com/s/1JdsFkLN9kczR9C92tKi83A",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/huginn/huginn/wiki/Browser-Emulation-Using-PhantomJs-Cloud",target:"_blank",rel:"noopener noreferrer"},S={href:"https://wechat.privacyhide.com/",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"跳转链接处理示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#跳转链接处理示例","aria-hidden":"true"},"#"),e(" 跳转链接处理示例")],-1),y=n("p",null,"要获取跳转链接的真实地址，可以使用WebsiteAgent直接读取原网页的HTML代码，并检查其中的跳转代码。",-1),z=i(`<p>跳转代码通常位于<code>&lt;script&gt;</code>标签内。由于<code>&lt;script&gt;</code>标签内的内容是文本，而非HTML属性，我们不能使用属性选择器（如@href）。相反，我们应使用XPath的<code>string()</code>函数来提取整个<code>&lt;script&gt;</code>标签的文本内容。之后，可以利用EventFormattingAgent的正则表达式从这些文本中提取URL。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># WebsiteAgent
<span class="token punctuation">{</span>
  <span class="token property">&quot;expected_update_period_in_days&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.chncpa.org/ycxm/202308/t20230817_254985.html&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on_change&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extract&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;xpath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;//script&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string(.)&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

# EventFormattingAgent
<span class="token punctuation">{</span>
  <span class="token property">&quot;instructions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;jumpurl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{{real_url.1}}&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;matchers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{{url}}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;regexp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;window\\\\.location\\\\.href\\\\s*=\\\\s*\\\\\\\\?[\\&quot;&#39;]([^\\&quot;&#39;]+?)(?:\\\\\\\\?[\\&quot;&#39;]);&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;real_url&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clean&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rss-合集" tabindex="-1"><a class="header-anchor" href="#rss-合集" aria-hidden="true">#</a> RSS 合集</h2><p>汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。</p>`,4),R={href:"https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://newzone.top/posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://newzone.top/posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"};function J(M,P){const a=o("BiliBili"),s=o("ExternalLinkIcon");return p(),l("div",null,[u,d,t(a,{bvid:"BV1k5411B7vF"}),g,n("ul",null,[h,n("li",null,[n("p",null,[e("参考 "),n("a",m,[e("deploy Huginn inside of Docker"),t(s)]),e("、"),n("a",b,[e("installation guide for Debian/Ubuntu"),t(s)]),e(" 来搭建 Huginn。")])]),n("li",null,[n("p",null,[e("注册 "),n("a",_,[e("PhantomJs Cloud"),t(s)]),e(" ,然后将 API key 保存在 Huginn 的 Credentials 中。很多网站是用 JS 加载动态内容，因此需要 "),f,e(" 来抓取页面 JS 缓存。免费版每天限制抓取 500 次页面，需求不大可建立多个账号使用不同 API key，足够个人使用。")]),k])]),v,n("p",null,[n("a",q,[e("点击网盘下载"),t(s)]),e("国内应急新闻的详细设置，导入到 Huginn 即可使用。其他问题参考 "),n("a",x,[e("PhantomJs Cloud 英文攻略"),t(s)]),e("。")]),n("p",null,[e("微信的屏蔽措施非常之多，公众号抓取可以尝试 "),n("a",S,[e("wechat-feeds"),t(s)]),e("。")]),w,y,t(a,{bvid:"BV1ae411v7Qg"}),z,n("ul",null,[n("li",null,[n("p",null,[n("a",R,[e("RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源"),t(s)])])]),n("li",null,[n("p",null,[n("a",H,[e("RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"),t(s)])])]),n("li",null,[n("p",null,[n("a",A,[e("RSS 速成篇：RSSHub 捡现成的轮子"),t(s)])])]),n("li",null,[n("p",null,[n("a",B,[e("RSS 速成篇 2：RSSHub 自部署"),t(s)])])]),n("li",null,[n("p",null,[n("a",E,[e("RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS"),t(s)])])]),n("li",null,[n("p",null,[n("a",C,[e("RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效"),t(s)])])])])])}const j=r(c,[["render",J],["__file","2018-10-07-huginn_scraping_any_website.html.vue"]]);export{j as default};
