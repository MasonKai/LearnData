import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-j_BNNnD0.js";const i={},u={href:"https://github.com/nextcloud/docker",target:"_blank",rel:"noopener noreferrer"},d=t('<p>虽然 Nextcloud 内置了 Office 功能，但对中文支持有限，建议使用 Onlyoffice。Onlyoffice 是一个基于 Web 的办公套件，可以帮助你创建和编辑文字、电子表格和幻灯片等文档，实现文档的在线协作、版本控制和在线编辑等功能。这种集成方式将大大提高你的工作效率和协作能力。</p><h2 id="公网访问-nextcloud" tabindex="-1"><a class="header-anchor" href="#公网访问-nextcloud" aria-hidden="true">#</a> 公网访问 Nextcloud</h2><p>若在公网中使用 Nextcloud，需在 <code>docker/nextcloud/data/config/config.php</code> 文件中的 <code>trusted_domains</code> 部分添加你的公网域名，例如 <code>1 =&gt; &#39;xxx.newzone.top&#39;</code>。</p><p>即使你的反向代理域名带有端口，也请勿在 <code>trusted_domains</code> 中包含端口信息，否则可能会出现「通过不被信任的域名访问」的提示。在使用带有端口的公网域名时，站点在未登录和成功登录时可能会在跳转时省略端口信息。这时，手动添加端口信息即可正常使用。</p><h2 id="onlyoffice" tabindex="-1"><a class="header-anchor" href="#onlyoffice" aria-hidden="true">#</a> ONLYOFFICE</h2>',5),r={href:"https://helpcenter.onlyoffice.com/installation/docs-community-install-docker.aspx",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"完成部署后，ONLYOFFICE 会生成一段代码，将其输入到服务器即可获取秘钥。将秘钥填写到「管理设置」>「ONLYOFFICE」中。请注意，重新启动 NAS 和 Docker 容器可能会导致秘钥更换。",-1),v=n("figure",null,[n("img",{src:"https://img.newzone.top/2023-11-11-13-51-31.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),m=n("h2",{id:"nextcloud-office-中文乱码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nextcloud-office-中文乱码","aria-hidden":"true"},"#"),s(" Nextcloud Office 中文乱码")],-1),b={href:"https://blog.csdn.net/skydust1979/article/details/106280811",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"/volume1/docker/nextcloud/data/lib/public/AppFramework/Http/FileDisplayResponse.php",-1),h=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//$output-&gt;setOutput($this-&gt;file-&gt;getContent());</span>
<span class="token variable">$fileContents</span><span class="token operator">=</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">file</span><span class="token operator">-&gt;</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$encoding</span> <span class="token operator">=</span> <span class="token function">mb_detect_encoding</span><span class="token punctuation">(</span><span class="token variable">$fileContents</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;UTF-8,GB2312, GBK, WINDOWS-1252, ISO-8859-15, ISO-8859-1, ASCII&quot;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$encoding</span> <span class="token operator">===</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$encoding</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;ISO-8859-15&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token variable">$fileContents</span> <span class="token operator">=</span> <span class="token function">iconv</span><span class="token punctuation">(</span><span class="token variable">$encoding</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;UTF-8&quot;</span><span class="token punctuation">,</span> <span class="token variable">$fileContents</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$output</span><span class="token operator">-&gt;</span><span class="token function">setOutput</span><span class="token punctuation">(</span><span class="token variable">$fileContents</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令" aria-hidden="true">#</a> 部署命令</h2><p>以下是集成了 ONLYOFFICE 的 Nextcloud 部署命令：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">nextcloud_db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mariadb<span class="token punctuation">:</span><span class="token number">10.6</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nextcloud_db
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>transaction<span class="token punctuation">-</span>isolation=READ<span class="token punctuation">-</span>COMMITTED <span class="token punctuation">-</span><span class="token punctuation">-</span>log<span class="token punctuation">-</span>bin=binlog <span class="token punctuation">-</span><span class="token punctuation">-</span>binlog<span class="token punctuation">-</span>format=ROW
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/nextcloud/mysql<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=nextcloud
      <span class="token punctuation">-</span> MYSQL_PASSWORD=nextcloud
      <span class="token punctuation">-</span> MYSQL_DATABASE=nextcloud
      <span class="token punctuation">-</span> MYSQL_USER=nextcloud

  <span class="token key atrule">nextcloud_app</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nextcloud
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nextcloud
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9030<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nextcloud_db
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/nextcloud/data<span class="token punctuation">:</span>/var/www/html
      <span class="token punctuation">-</span> /volume1/sync<span class="token punctuation">:</span>/sync <span class="token comment">#外部存储目录</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_PASSWORD=nextcloud
      <span class="token punctuation">-</span> MYSQL_DATABASE=nextcloud
      <span class="token punctuation">-</span> MYSQL_USER=nextcloud
      <span class="token punctuation">-</span> MYSQL_HOST=nextcloud_db

  <span class="token key atrule">onlyoffice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> onlyoffice/documentserver
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> onlyoffice
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9031<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/nextcloud/onlyoffice/data<span class="token punctuation">:</span>/var/www/onlyoffice/Data
      <span class="token punctuation">-</span> /volume1/docker/nextcloud/onlyoffice/logs<span class="token punctuation">:</span>/var/log/onlyoffice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="外部存储" tabindex="-1"><a class="header-anchor" href="#外部存储" aria-hidden="true">#</a> 外部存储</h2><p>有时你的文档在其他位置，可以在应用中添加插件 External storage support，这样可以直接编辑 FTP、WebDAV、Nextcloud、SFTP、Amazone S3 或其他对象存储等外部文件。</p><p>安装插件后，进入「管理」&gt;「外部存储」设置目录。</p>`,7);function g(x,_){const a=p("ExternalLinkIcon");return c(),l("div",null,[n("p",null,[n("a",u,[s("Nextcloud"),e(a)]),s(" 是一款开源的云存储和协作平台。Nextcloud 不仅可以让你创建文件共享、在线编辑和备份等功能，还支持多用户协作、通讯录、日历等功能，可以完全替代你的 Google Drive 或 Dropbox 等云存储服务。")]),d,n("p",null,[n("a",r,[s("ONLYOFFICE"),e(a)]),s(" Document Server 是一套提供在线编辑 Office 文档服务的套件。通过使用该套件及相应的 Nextcloud 插件，你可以在 Nextcloud 上进行在线编辑 Office 文档的操作，并正确识别中文内容。")]),k,v,m,n("p",null,[s("Nextcloud Office 无法正常显示文档中的中文，而只显示方格子。关于此问题的解决方案可在"),n("a",b,[s("这篇教程"),e(a)]),s("中找到。教程建议修改 "),f,s(" 文件，注释掉第 67 行，并添加以下内容。然而，我测试后发现此方法并不起作用。")]),h])}const S=o(i,[["render",g],["__file","nextcloud.html.vue"]]);export{S as default};
