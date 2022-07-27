"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2725],{9161:(e,t,a)=>{a.r(t),a.d(t,{data:()=>c});const c=JSON.parse('{"key":"v-2399a90c","path":"/_posts/2017-10-18-light_cat_e8-c-epon_admin.html","title":"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)","lang":"zh-CN","frontmatter":{"title":"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)","date":"2017-10-18T18:28:00.000Z","category":["网络"],"tag":["光猫"],"order":-7,"summary":"为什么要获得光猫超级密码？ 端口映射 (eMule high ID)、桥接模式（路由器掌控拨号，不能兼容固定电话）。网上关于光猫超级密码的获取攻略都在 2012-14 年，已经无法使用了。 测试环境 运营商：上海电信 设备：贝尔 E8-C-EPON 硬件版本：RG201O-CA_V1A2 软件版本：E201OCAA2V11S 光猫超级密码破解步骤 1. 地址","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2017-10-18-light_cat_e8-c-epon_admin.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"光猫"}],["meta",{"property":"article:published_time","content":"2017-10-18T18:28:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T15:18:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"为什么要获得光猫超级密码？","slug":"为什么要获得光猫超级密码","children":[{"level":3,"title":"测试环境","slug":"测试环境","children":[]}]},{"level":2,"title":"光猫超级密码破解步骤","slug":"光猫超级密码破解步骤","children":[]}],"git":{"createdTime":1658685076000,"updatedTime":1658762316000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":3}]},"readingTime":{"minutes":1.04,"words":313},"filePathRelative":"_posts/2017-10-18-light_cat_e8-c-epon_admin.md","localizedDate":"2017年10月18日"}')},3756:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var c=a(8e3);const i=[(0,c.uE)('<h2 id="为什么要获得光猫超级密码" tabindex="-1"><a class="header-anchor" href="#为什么要获得光猫超级密码" aria-hidden="true">#</a> 为什么要获得光猫超级密码？</h2><p>*端口映射 (eMule high ID)、桥接模式（路由器掌控拨号，不能兼容固定电话）。*网上关于光猫超级密码的获取攻略都在 2012-14 年，已经无法使用了。</p><h3 id="测试环境" tabindex="-1"><a class="header-anchor" href="#测试环境" aria-hidden="true">#</a> 测试环境</h3><p>运营商：上海电信 设备：贝尔 E8-C-EPON 硬件版本：RG201O-CA_V1A2 软件版本：E201OCAA2V11S</p><h2 id="光猫超级密码破解步骤" tabindex="-1"><a class="header-anchor" href="#光猫超级密码破解步骤" aria-hidden="true">#</a> 光猫超级密码破解步骤</h2><ol><li><p>地址栏输入 <code>192.168.1.1</code>，用户名：光猫背面，密码：光猫背面，登陆管理界面。</p><p><img src="https://pic1.zhimg.com/v2-9e43bc86b9095f3f6c2cfa4bd58dcd68_r.jpg" alt="" loading="lazy"></p></li><li><p>浏览器地址栏输入 <code>192.168.1.1/backupsettings.txt</code>，将 <code>backupsettings.txt</code> 文件导出并备份在电脑上。 如果打不开上面的地址，改为输入 <code>192.168.1.1/backupsettings.conf</code>，并做好备份。</p></li><li><p>打开下载好的文档 <code>backupsettings.txt</code> 或 <code>backupsettings.conf</code>，搜索 <code>TeleComAccount</code>，两个 password 间就是超级密码。超级账号是 telecomadmin。</p><p><img src="https://pic3.zhimg.com/v2-ee441dd18cc8e5f6303fdaef82b6d476_r.jpg" alt="" loading="lazy"></p></li><li><p>地址栏输入 <code>192.168.1.1</code>，用刚获取的超级密码登陆，然后开始端口映射和设备桥接了。</p><p><img src="https://pic1.zhimg.com/v2-31d6bb6b90be541c186a360fe2dd323c_r.jpg" alt="" loading="lazy"></p></li></ol><p>新装光猫无法获取超级密码的话，可直接使用运营商 app 进行映射。</p>',7)],o={},r=(0,a(1935).Z)(o,[["render",function(e,t){return(0,c.wg)(),(0,c.iD)("div",null,i)}]])},1935:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,c]of t)a[e]=c;return a}}}]);