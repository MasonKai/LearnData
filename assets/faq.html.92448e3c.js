import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as i,a as t,b as e,d as o,e as a,r as d}from"./app.7a8b597b.js";const c={},l={href:"https://answers.microsoft.com/zh-hans/",target:"_blank",rel:"noopener noreferrer"},p=a('<h2 id="windows-快捷键" tabindex="-1"><a class="header-anchor" href="#windows-快捷键" aria-hidden="true">#</a> Windows 快捷键</h2><table><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td>Win 键 + 数字键</td><td>启动任务栏的快捷方式</td></tr><tr><td>Win 键 + D</td><td>显示桌面，再点击一次后恢复</td></tr><tr><td>Win 键 + E</td><td>快速启动文件资源管理器</td></tr><tr><td><strong>Win 键 + Tab</strong></td><td>查看当前桌面打开的窗口和所有桌面</td></tr><tr><td>Win + Ctrl + D</td><td>创建新的虚拟桌面，新桌面里没有打开窗口</td></tr><tr><td>Win + Ctrl + 左/右</td><td>切换虚拟桌面</td></tr><tr><td>Win + I</td><td>系统设置</td></tr><tr><td>Win 键 + 向上键</td><td>最大化窗口 (传统桌面)</td></tr><tr><td>Win 键 + 向下键</td><td>最小化窗口 (传统桌面)</td></tr><tr><td>Win 键 + 向左键</td><td>将窗口最大化到屏幕的左侧 (传统桌面)</td></tr><tr><td>Win 键 + 向右键</td><td>将窗口最大化到屏幕的右侧 (传统桌面)</td></tr><tr><td>Ctrl+W</td><td>关闭标签页</td></tr><tr><td>Alt+F4</td><td>关闭当前程序窗口</td></tr></tbody></table><p><code>%AppData%</code> 为 C:\\Users\\用户名\\AppData\\Roaming 的变量路径。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="网址快捷方式" tabindex="-1"><a class="header-anchor" href="#网址快捷方式" aria-hidden="true">#</a> 网址快捷方式</h2><p>鼠标右键 - 新建 - 快捷方式，插入浏览器路径，然后空格并输入要打开的网址链接，比如 <code>&quot;C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe&quot; https://newzone.top/</code>。</p><p>如果需要一次打开多个网址，则在参数后继续添加「空格 链接」。</p><h2 id="chrome-开发工具" tabindex="-1"><a class="header-anchor" href="#chrome-开发工具" aria-hidden="true">#</a> Chrome 开发工具</h2><p>网页重定向时，无法在开发工具中看到重定向时打开的网页。</p><p>点击 <code>F12-Settings-Throttling</code>，增加浏览器的网络延时，来查看跳转路径。到达中转页面时，可在开发工具中将网络改为 Offiline，网页将停止加载。</p><ul><li>Preserve log：不在网页刷新或重定向后，清楚加载日志</li><li>Disbale cache：不使用网页缓存</li><li>Online：定制本地与服务端的网络环境，下载速度、上传速度、延时。</li></ul><h2 id="网页转桌面应用" tabindex="-1"><a class="header-anchor" href="#网页转桌面应用" aria-hidden="true">#</a> 网页转桌面应用</h2><h3 id="chrome-app" tabindex="-1"><a class="header-anchor" href="#chrome-app" aria-hidden="true">#</a> Chrome App</h3><p>使用 Chrome 浏览器来给我们的网页生成一个「桌面应用」。</p><ol><li>用 Chrome 浏览器打开想要转换为「桌面客户端」的网页，将登录后正常使用状态的网页 URL 收藏到书签栏。</li><li>打开 Chrome App 页面：<code>chrome://apps</code>，将刚刚收藏的标签页项目拖拽到下面的空白处，在应用图标上右键，勾选「在窗口中打开」，然后点击创建快捷方式。</li></ol>',14),h={href:"https://convertico.com/",target:"_blank",rel:"noopener noreferrer"},u={id:"nativefier",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#nativefier","aria-hidden":"true"},"#",-1),_={href:"https://github.com/jiahaog/nativefier/",target:"_blank",rel:"noopener noreferrer"},b=t("p",null,[e("利用开源的 Nativefier 能将网页转制成为一个 "),t("strong",null,"可安装的"),e(" 桌面应用，支持 macOS 10.9+ / Windows / Linux 系统。其原理就是将网页利用 Electron 技术将网页内容封装起来，成为一个可执行、可安装的应用程序。")],-1),k=t("p",null,[e("然而这样的方式需要一些比较复杂的安装配置。由于 Nativefier 是 "),t("code",null,"Node.js"),e(" 编写的，所以不仅需要安装 "),t("code",null,"Node.js"),e(" 环境，还要安装 "),t("code",null,"npm"),e(" 包管理器，才可以通过 "),t("code",null,"npm install nativefier -g"),e(" 安装 Nativefier。安装之后 Nativefier 也只有命令行的交互方式，没有图形化界面。")],-1),m={id:"web2desk",tabindex:"-1"},g=t("a",{class:"header-anchor",href:"#web2desk","aria-hidden":"true"},"#",-1),v={href:"https://desktop.appmaker.xyz/",target:"_blank",rel:"noopener noreferrer"},W=a('<p>Web2Desk 让我们可以直接输入网页链接、应用名称和应用图标，然后经过其在服务器上面的构建，直接给我们提供 Windows、macOS 和 Linux 的原生安装程序的下载。</p><p>但测试中，用 Web2Desk 转换滴答清单 Web, 无法记录登陆状态，实用性较低。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="无法切换中英文" tabindex="-1"><a class="header-anchor" href="#无法切换中英文" aria-hidden="true">#</a> 无法切换中英文</h3><p>按键示例、无法切换中英文，大部分原因都与输入法无关，而是硬件出了问题。</p><ul><li>检查方法：安装并启动 AutoHotkey，然后点击 view - Key history and script info。窗口会显示最近的按键历史，当发现一个键在疯狂重复时，很有可能就是出问题的按键。</li><li>修复方法：键盘上重复按下该按键，看看是否能修复。不行的话，拔下键盘 USB，单独使用软键盘，测试按键是否正常。如果软键盘正常，键盘配件又无法修复，可以通过 Powertoys 或 AutoHotkey 禁用这个按键。</li></ul><h3 id="使用中-禁止系统自动更新重启" tabindex="-1"><a class="header-anchor" href="#使用中-禁止系统自动更新重启" aria-hidden="true">#</a> 使用中，禁止系统自动更新重启</h3><p>Win11 注册表中进入「计算机\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU」，新建 DWORD（32 位）值，重命名为「NoAutoRebootWithLoggedOnUsers」，键值改为 1。</p><p>Win10 没找到类似注册表，直接关闭自动更新。</p><h3 id="wps-没有宏" tabindex="-1"><a class="header-anchor" href="#wps-没有宏" aria-hidden="true">#</a> WPS 没有宏</h3>',10),w={href:"https://www.jyrd.com/media/6490.html",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"选项 - 信任中心 - 启用宏",-1),x=t("li",null,"开启聚光灯效果：视图 - 阅读模式，每个文件需要单独开启，文件保存后自动开启。",-1),C=a(`<h3 id="microsoft-store-应用快捷方式" tabindex="-1"><a class="header-anchor" href="#microsoft-store-应用快捷方式" aria-hidden="true">#</a> Microsoft Store 应用快捷方式</h3><p>Microsoft Store 安装的应用没有固定位置，一更新就会换位置，无法建立快捷方式。虽然这些应用能被设为开机启动，但经常启动不成功。</p><p>右键 Microsoft Store 应用，将其固定在任务栏。通过 <code>Win 键 + 数字键</code>的来启动应用。比如应用在任务栏的第 7 位，则使用热键 <code>Win + 7</code>。</p><h3 id="无法安装应用" tabindex="-1"><a class="header-anchor" href="#无法安装应用" aria-hidden="true">#</a> 无法安装应用</h3><p>安装应用却被提示「您的安全设置不允许将此应用程序安装到您的计算机上」时，新建记事本并输入下方代码，修改记事本的后缀名为.reg，然后右键以管理员身份运行，合并到注册表就可以了。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Windows Registry Editor Version <span class="token number">5.00</span>
<span class="token punctuation">[</span>HKEY_LOCAL_MACHINE<span class="token punctuation">\\</span><span class="token punctuation">\\</span>SOFTWARE<span class="token punctuation">\\</span><span class="token punctuation">\\</span>Microsoft<span class="token punctuation">\\</span><span class="token punctuation">\\</span>.NETFramework<span class="token punctuation">\\</span><span class="token punctuation">\\</span>Security<span class="token punctuation">\\</span><span class="token punctuation">\\</span>TrustManager<span class="token punctuation">\\</span><span class="token punctuation">\\</span>PromptingLevel<span class="token punctuation">]</span>
<span class="token string">&quot;MyComputer&quot;</span><span class="token operator">=</span><span class="token string">&quot;Enabled&quot;</span>
<span class="token string">&quot;LocalIntranet&quot;</span><span class="token operator">=</span><span class="token string">&quot;Enabled&quot;</span>
<span class="token string">&quot;Internet&quot;</span><span class="token operator">=</span><span class="token string">&quot;Enabled&quot;</span>
<span class="token string">&quot;TrustedSites&quot;</span><span class="token operator">=</span><span class="token string">&quot;Enabled&quot;</span>
<span class="token string">&quot;UntrustedSites&quot;</span><span class="token operator">=</span><span class="token string">&quot;Disabled&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,7),A={class:"footnotes"},E={class:"footnotes-list"},S={id:"footnote1",class:"footnote-item"},N={href:"https://blog.csdn.net/lijianbiao0/article/details/85118775",target:"_blank",rel:"noopener noreferrer"},y=t("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),L={id:"footnote2",class:"footnote-item"},O={href:"https://superuser.com/questions/1252575/unable-to-install-clickonce-application-due-to-security-settings-windows-10",target:"_blank",rel:"noopener noreferrer"},D=t("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function M(I,T){const n=d("ExternalLinkIcon");return r(),i("div",null,[t("p",null,[e("Windows 遇到不懂的问题，可以在 "),t("a",l,[e("Microsoft 支持社区"),o(n)]),e(" 提问，回复比较快。")]),p,t("p",null,[e("图标转换： "),t("a",h,[e("ConvertICO"),o(n)]),e(" 将 png 图片转化为 ico 文件，从而自定义图标。")]),t("h3",u,[f,e(),t("a",_,[e("Nativefier"),o(n)])]),b,k,t("h3",m,[g,e(),t("a",v,[e("Web2Desk"),o(n)])]),W,t("ul",null,[t("li",null,[e("让 wps 支持 vba 宏，安排 "),t("a",w,[e("WPS VBA 模块 V7.1 版本"),o(n)]),e("；"),q,e(" 后自动添加为受信任的文档，或添加主要文件夹为信任位置。")]),x]),C,t("section",A,[t("ol",E,[t("li",S,[t("p",null,[t("a",N,[e("Windows 变量路径"),o(n)]),e(),y])]),t("li",L,[t("p",null,[t("a",O,[e("Unable to Install ClickOnce Application due to Security Settings"),o(n)]),e(),D])])])])])}const R=s(c,[["render",M],["__file","faq.html.vue"]]);export{R as default};
