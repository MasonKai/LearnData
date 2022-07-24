import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as t,a as n,b as a,e as s,d as l,r as o}from"./app.4140a0e2.js";const p={},r=n("p",null,[n("strong",null,"scrcpy"),s(" \u662F\u514D\u8D39\u5F00\u6E90\u7684\u6295\u5C4F\u8F6F\u4EF6\uFF0C\u652F\u6301\u5C06\u5B89\u5353\u624B\u673A\u5C4F\u5E55\u6295\u653E\u5728 Windows\u3001macOS\u3001GNU/Linux \u4E0A\uFF0C\u5E76\u53EF\u76F4\u63A5\u501F\u52A9\u9F20\u6807\u5728\u6295\u5C4F\u7A97\u53E3\u4E2D\u8FDB\u884C\u4EA4\u4E92\u548C\u5F55\u5236\u3002")],-1),d=s("\u9879\u76EE\u5730\u5740\uFF1A"),m={href:"https://github.com/Genymobile/scrcpy",target:"_blank",rel:"noopener noreferrer"},u=s("https://github.com/Genymobile/scrcpy"),v=s("Windows \u4E0B\u8F7D\uFF1A"),b={href:"https://github.com/Genymobile/scrcpy/releases/download/v1.24/scrcpy-win64-v1.24.zip",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"scrcpy-win64-v1.24.zip",-1),_=s("2022.04.29 \u66F4\u65B0 scrcpy 1.24\uFF0C\u56FD\u5185\u642C\u8FD0\u94FE\u63A5\uFF1A"),k={href:"https://wwz.lanzouf.com/iezWX03",target:"_blank",rel:"noopener noreferrer"},y=s("https://wwz.lanzouf.com/iezWX03"),g=l(`<p>\u7535\u8111\u7AEF\u5B8C\u6210\u914D\u7F6E\u540E\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5728\u624B\u673A\u7AEF\u5F00\u542F <code>\u5F00\u53D1\u8005\u9009\u9879</code> \u53CA <code>USB \u8C03\u8BD5</code>\u3002\u7136\u540E\u4F7F\u7528\u6570\u636E\u7EBF\u5C06\u624B\u673A\u548C\u7535\u8111\u8FDE\u63A5\u5E76\u5141\u8BB8 USB \u8C03\u8BD5\uFF0C\u5373\u53EF\u53CC\u51FB\u89E3\u538B\u5F97\u5230\u7684 <strong>scrcpy.exe</strong> \u6587\u4EF6\u8FDB\u884C\u6709\u7EBF\u6295\u5C4F\u4E86\u3002</p><h2 id="\u65E0\u7EBF\u6295\u5C4F-win-10-11" tabindex="-1"><a class="header-anchor" href="#\u65E0\u7EBF\u6295\u5C4F-win-10-11" aria-hidden="true">#</a> \u65E0\u7EBF\u6295\u5C4F (WIN 10/11)</h2><ul><li>\u786E\u4FDD PC \u548C\u624B\u673A\u5904\u4E8E\u540C\u4E00\u5C40\u57DF\u7F51\u4E2D</li><li>\u6253\u5F00 PowerShell (~ cmd)\uFF0C\u4F9D\u6B21\u64CD\u4F5C\u5E76\u8F93\u5165\u4EE3\u7801</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># a.\u5C06\u4EE3\u7801\u76EE\u5F55\u5B9A\u4F4D\u5230 scrcpy \u6587\u4EF6\u5939\u3002</span>
<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>scrcpy-win64-v1.24
<span class="token comment"># WIN11 \u5728 scrcpy \u6587\u4EF6\u5939\u4E2D\u53F3\u952E\u300C\u5728\u7EC8\u7AEF\u4E2D\u6253\u5F00\u300D\uFF0C\u5C06\u81EA\u52A8\u5B9A\u4F4D\u3002</span>
\u200B
<span class="token comment"># b.\u5728\u624B\u673A\u7AEF\u5F00\u542F\u300C\u5F00\u53D1\u8005\u9009\u9879\u300D\u53CA\u300CUSB \u8C03\u8BD5\u300D\uFF0C\u7136\u540E\u4F7F\u7528\u6570\u636E\u7EBF\u5C06\u624B\u673A\u548C\u7535\u8111\u8FDE\u63A5\u5E76\u5141\u8BB8 USB \u8C03\u8BD5\uFF0C\u5F00\u542F\u624B\u673A\u7AEF\u53E3</span>
<span class="token comment"># \u5982\u679C\u672C\u884C\u663E\u793A no device \u6216\u672A\u542F\u52A8 adb\uFF0C\u9700\u68C0\u67E5\u300CUSB \u8C03\u8BD5\u300D\u662F\u5426\u5F00\u542F\uFF0C\u6216\u66F4\u6362\u6570\u636E\u7EBF\u3002</span>
<span class="token comment"># \u6B64\u5916\uFF0C\u4E00\u4E9B\u624B\u673A\u9700\u9009\u62E9\u300C\u6587\u4EF6\u4F20\u8F93\u300D\u6A21\u5F0F\u65B9\u80FD\u4F7F\u7528 adb\u3002</span>
.<span class="token punctuation">\\</span>adb tcpip <span class="token number">5555</span>
\u200B
<span class="token comment"># c.\u62D4\u51FA\u624B\u673A\u6570\u636E\u7EBF\uFF0C\u5F00\u59CB\u65E0\u7EBF\u6295\u5C4F\u3002(192.168.2.15 \u4E3A\u624B\u673A\u7AEF\u7684 WIFI \u5C40\u57DF\u7F51 ip\uFF0C\u9700\u66F4\u6539)</span>
.<span class="token punctuation">\\</span>adb connect <span class="token number">192.168</span>.2.15:5555
\u200B
<span class="token comment"># d.\u542F\u52A8 scrcpy.exe</span>
.<span class="token punctuation">\\</span>scrcpy

<span class="token comment"># \u5982\u6709\u62A5\u9519\u6216\u5EF6\u8FDF\u8F83\u5927\uFF0C\u53EF\u542F\u52A8\u4F4E\u5206\u8FA8\u7387\u6295\u5C4F</span>
.<span class="token punctuation">\\</span>scrcpy -m <span class="token number">1024</span>
<span class="token comment"># \u8FDE\u63A5\u591A\u4E2A\u8BBE\u5907\uFF0C\u62A5\u9519\u63D0\u793A\`failed to get feature set: more than one device/emulator\`\uFF0C\u5219\u6307\u5B9A\u8FDE\u63A5 tcpip \u8BBE\u5907</span>
.<span class="token punctuation">\\</span>scrcpy -e -m <span class="token number">1024</span>
<span class="token comment"># \u7B80\u5316\u64CD\u4F5C\uFF1A\u5408\u5E76\u6B65\u9AA4 c \u548C d\uFF0C\u4FDD\u6301\u5C4F\u5E55\u5E38\u4EAE\uFF0C\u4F7F\u7528 1024 \u5206\u8FA8\u7387</span>
.<span class="token punctuation">\\</span>scrcpy --tcpip<span class="token operator">=</span><span class="token number">192.168</span>.2.15 -w -m <span class="token number">1024</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tc.seoipo.com/20190829093407.png" alt="" loading="lazy"></p><h3 id="\u5C4F\u5E55\u5F55\u5236" tabindex="-1"><a class="header-anchor" href="#\u5C4F\u5E55\u5F55\u5236" aria-hidden="true">#</a> \u5C4F\u5E55\u5F55\u5236</h3><p>\u6253\u5F00 PowerShell (~ cmd)\uFF0C\u4F9D\u6B21\u64CD\u4F5C\u5E76\u8F93\u5165\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u4EE3\u7801\u76EE\u5F55\u5B9A\u4F4D\u5230 scrcpy \u6587\u4EF6\u5939</span>
<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>scrcpy-win64-v1.24
\u200B
<span class="token comment"># \u5F00\u59CB\u5F55\u5236\uFF0C\u5F55\u5C4F\u6587\u4EF6\u4F1A\u4EE5\u547D\u4EE4\u6307\u5B9A\u7684\u6587\u4EF6\u540D\u81EA\u52A8\u4FDD\u5B58\u5728\u5F53\u524D\u6587\u4EF6\u5939\u5185\u3002</span>
.<span class="token punctuation">\\</span>scrcpy -r filename.mp4
\u200B
<span class="token comment"># \u5173\u95ED\u6295\u5C4F\u7A97\u53E3\u540E\uFF0C\u81EA\u52A8\u505C\u6B62\u5F55\u5C4F\u5E76\u5C06\u89C6\u9891\u4FDD\u5B58\u5728\u76F8\u5E94\u76EE\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u51B3\u6295\u5C4F\u6A21\u7CCA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u6295\u5C4F\u6A21\u7CCA" aria-hidden="true">#</a> \u89E3\u51B3\u6295\u5C4F\u6A21\u7CCA</h3><p>\u5982\u679C\u5C4F\u5E55\u8BBE\u7F6E\u4E86\u7F29\u653E\u6BD4\u4F8B\uFF0C\u6295\u5C4F\u754C\u9762\u4F1A\u6A21\u7CCA\u3002\u53F3\u952E <strong>scrcpy.exe</strong>\uFF0C\u5C5E\u6027 - \u517C\u5BB9\u6027 - \u66F4\u6539\u9AD8 DPI \u8BBE\u7F6E - \u52FE\u9009\u66FF\u4EE3\u9AD8 DPI \u7F29\u653E\u884C\u4E3A\uFF0C\u5E94\u7528\u540E\uFF0C\u8BE5\u95EE\u9898\u53EF\u89E3\u51B3\u3002</p><p><img src="http://tc.seoipo.com/20190829095640.png" alt="" loading="lazy"></p><h3 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h3><ul><li><p>\u62A5\u9519\u68C0\u67E5\uFF1A\u4E0B\u9762\u4E09\u6B65\u53EF\u89E3\u51B3 90% \u7684\u9519\u8BEF\u3002</p><ul><li>\u6838\u5BF9\u6709\u7EBF\u8FDE\u63A5\u6B65\u9AA4\uFF0C\u5F00\u542F USB \u8C03\u8BD5\uFF0D\u8FDE\u63A5\u624B\u673A\u4E0E\u7535\u8111\uFF0D\u542F\u52A8 scrcpy\uFF1B</li><li>\u68C0\u67E5\u624B\u673A\u7684\u300C\u672C\u673A IP\u300D\u662F\u5426\u6B63\u786E\uFF1B</li><li>\u66F4\u6362\u6570\u636E\u7EBF\u3002</li></ul></li><li><p><code>ERROR: Exception on thread Thread[main,5,main]</code> \u6B64\u9879\u9519\u8BEF\u591A\u4E3A\u624B\u673A\u4E0D\u517C\u5BB9 scrcpy \u9ED8\u8BA4\u5206\u8FA8\u7387\u8BBE\u7F6E\u3002\u89E3\u51B3\u65B9\u4F4D\u4E3A\uFF0C\u6309\u4E0B\u65B9\u4FEE\u6539 scrcpy \u542F\u52A8\u4EE3\u7801\uFF0C\u4F7F\u7528\u8F83\u4F4E\u7684\u5206\u8FA8\u7387\u3002</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E09\u9879\u8BBE\u7F6E\uFF0C\u4EFB\u9009\u5176\u4E00</span>
.<span class="token punctuation">\\</span>scrcpy -m <span class="token number">1920</span>
.<span class="token punctuation">\\</span>scrcpy -m <span class="token number">1024</span>
.<span class="token punctuation">\\</span>scrcpy -m <span class="token number">800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),f=s("\u66F4\u591A\u95EE\u9898\u62A5\u9519\uFF0C\u89E3\u51B3\u65B9\u6CD5\u53C2\u8003 "),x={href:"https://github.com/Genymobile/scrcpy/blob/master/FAQ.md",target:"_blank",rel:"noopener noreferrer"},w=s("\u5B98\u65B9 FAQ"),S=s("\u3002");function z(B,I){const e=o("ExternalLinkIcon");return i(),t("div",null,[r,n("p",null,[d,n("a",m,[u,a(e)])]),n("p",null,[v,n("a",b,[h,a(e)])]),n("p",null,[_,n("a",k,[y,a(e)])]),g,n("p",null,[f,n("a",x,[w,a(e)]),S])])}var W=c(p,[["render",z],["__file","2019-08-26-scrcpy_screen_projection.html.vue"]]);export{W as default};
