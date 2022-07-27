"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[840],{8587:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-72cba7c3","path":"/code/Javascript.html","title":"Javascript","lang":"zh-CN","frontmatter":{"article":false,"title":"Javascript","icon":null,"order":2,"summary":"常用函数 JavaScript 对象 对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。 对象一定要用英文冒号来注明，否则整段代码失效。属性由逗号分隔： 全局变量 js 的全部变量要用 window. 来定义。如果变量在函数内没有声明（没有使用 var），该变量为全局变量。 局部变量：在函数中通过 var 声明","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/Javascript.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"Javascript"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T05:03:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-27T05:03:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"常用函数","slug":"常用函数","children":[]},{"level":2,"title":"JavaScript 对象","slug":"javascript-对象","children":[{"level":3,"title":"全局变量","slug":"全局变量","children":[]},{"level":3,"title":"变量类型","slug":"变量类型","children":[]}]},{"level":2,"title":"运算符","slug":"运算符","children":[]},{"level":2,"title":"取随机值","slug":"取随机值","children":[]}],"git":{"createdTime":1658898208000,"updatedTime":1658898208000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":3.83,"words":1148},"filePathRelative":"code/Javascript.md","localizedDate":"2022年7月27日"}')},3650:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(8e3);const p=[(0,t.uE)('<h2 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数" aria-hidden="true">#</a> 常用函数</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;v-modal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//通过 Tagname 获取元素，删除指定元素</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>cars<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>cars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>   <span class="token comment">//循环语句，i++会在代码被执行后增加一个值</span>\n<span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">//跳出当前循环但继续函数</span>\n\n<span class="token comment">//js 暂停</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">//100 毫秒延时</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span>f1<span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token comment">//直接跳出循环和函数</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//截取中间的字符串，A 有多少字符就需要加多少位置</span>\nstr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token comment">//取特定字符前后的字符串</span>\n<span class="token keyword">var</span> ture_tkl01 <span class="token operator">=</span> taokouling<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;打&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">//取第 4 位后的字符串 (4 代表开始位置，相当于从 5 开始截取到尾部)</span>\n<span class="token keyword">var</span> ture_tkl <span class="token operator">=</span> ture_tkl01<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//报错处理</span>\n<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">try</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;pro-operation&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;product-button02 disabled&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;立即申购&quot;</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">//下单</span>\n        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;product-operation&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;product-button02&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//js 函数为同步处理，只有 if else、setTimeour、for each 等函数才能按序运行</span>\n\n<span class="token comment">//setInterval 不要包含多个函数，否则 clearInterval 容易出错</span>\n\n<span class="token comment">//替换，不添加/g，则替换只发生一次</span>\ntext<span class="token punctuation">.</span>value <span class="token operator">=</span> text<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//全局替换，如果使用/\\s/g，则换行符也会被替换</span>\ntext<span class="token punctuation">.</span>value <span class="token operator">=</span> text<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex"> </span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//载入完成后，自动或取焦点。textSour 为元素 id，需配合 jquery</span>\nwindow<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n textSour<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">//按钮点击后使用函数</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#clearEmoji&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//去除每行首尾空格，支持特殊字符，首尾的空格、制表符、特殊字符的组合都倍清除</span>\nstrResult <span class="token operator">+=</span> split_result<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^[\\t\\s]*)|([\\t\\s]*$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-对象" tabindex="-1"><a class="header-anchor" href="#javascript-对象" aria-hidden="true">#</a> JavaScript 对象</h2><p>对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。 对象一定要用<strong>英文冒号</strong>来注明，否则整段代码失效。属性由逗号分隔：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> person<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">firstname</span><span class="token operator">:</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">lastname</span><span class="token operator">:</span><span class="token string">&quot;Doe&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">5566</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">//对象属性有两种寻址方式</span>\nname<span class="token operator">=</span>person<span class="token punctuation">.</span>lastname<span class="token punctuation">;</span>\nname<span class="token operator">=</span>person<span class="token punctuation">[</span><span class="token string">&quot;lastname&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">//对象的方法定义了一个函数，并作为对象的属性存储。对象方法通过添加 () 调用 (作为一个函数)。</span>\n<span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;对象&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n <span class="token keyword">var</span> person <span class="token operator">=</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">firstname</span><span class="token operator">:</span><span class="token string">&quot;名&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">lastname</span><span class="token operator">:</span><span class="token string">&quot;姓&quot;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">fullname</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastname<span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>firstname\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>       <span class="token comment">//不同属性间需要加逗号隔开</span>\n  <span class="token literal-property property">eyecolor</span><span class="token operator">:</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;对象&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span>\n person<span class="token punctuation">.</span><span class="token function">fullname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;眼睛颜色是&quot;</span><span class="token operator">+</span>person<span class="token punctuation">.</span>eyecolor  <span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h3><p>js 的全部变量要用 <code>window.</code> 来定义。如果变量在函数内没有声明（没有使用 var），该变量为全局变量。</p><p>局部变量：在函数中通过 var 声明的变量。全局变量：在函数外通过 var 声明的变量。</p><p>没有声明就使用的变量，默认为全局变量，不论这个变量在哪被使用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;demo&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n<span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;demo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;我可以显示 &quot;</span> <span class="token operator">+</span> carName<span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    carName <span class="token operator">=</span> <span class="token string">&quot;Volvo&quot;</span><span class="token punctuation">;</span>   <span class="token comment">//如果在这添加 var，声明变量，则变为局部变量，无法调用</span>\n<span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量类型" tabindex="-1"><a class="header-anchor" href="#变量类型" aria-hidden="true">#</a> 变量类型</h3><p>当您声明新变量时，可以使用关键词 &quot;new&quot; 来声明其类型：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> carname <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n字符串<span class="token punctuation">;</span>\n<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n数字<span class="token punctuation">;</span>\n<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n布尔<span class="token punctuation">;</span>\n<span class="token keyword">var</span> cars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n数组<span class="token punctuation">;</span>\n<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n对象<span class="token punctuation">;</span>\n<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n对象<span class="token punctuation">;</span>\n\n<span class="token comment">// 数据赋值</span>\n<span class="token keyword">var</span> length <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span> <span class="token comment">// Number 通过数字字面量赋值</span>\n<span class="token keyword">var</span> points <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// Number 通过表达式字面量赋值</span>\n<span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">&quot;Johnson&quot;</span><span class="token punctuation">;</span> <span class="token comment">// String 通过字符串字面量赋值</span>\n<span class="token keyword">var</span> cars <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Saab&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Volvo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BMW&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Array  通过数组字面量赋值</span>\n<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Doe&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Object 通过对象字面量赋值</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//后置++是将自身的值赋给新变量，然后才自身加 1.</span>\n<span class="token comment">//前置++是将自身加 1 的值赋值给新变量，同时自身也加 1；</span>\nint a<span class="token punctuation">;</span>\na<span class="token operator">=</span>i<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//将 i 的值赋值给 a，即 a=i；然后再执行 i=i+1；也就是【a=i++;】与【a=i; i=i+1;】等价。</span>\na<span class="token operator">=</span><span class="token operator">++</span>i<span class="token punctuation">;</span><span class="token comment">//将 i+1 的值赋给 a，即 a=i+1;然后再执行 i=i+1；也就是【a=++i;】与【a=i+1;i=i+1;】等价。</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 描述 (x=5) 比较</span>\n<span class="token comment">// == 等于</span>\nx<span class="token operator">==</span><span class="token number">8</span> <span class="token boolean">false</span>\nx<span class="token operator">==</span><span class="token number">5</span> <span class="token boolean">true</span>\n<span class="token comment">// === 绝对等于（值和类型均相等）</span>\nx<span class="token operator">===</span><span class="token string">&quot;5&quot;</span> <span class="token boolean">false</span>\nx<span class="token operator">===</span><span class="token number">5</span> <span class="token boolean">true</span>\n<span class="token comment">// != 不等于</span>\nx<span class="token operator">!=</span><span class="token number">8</span> <span class="token boolean">true</span>\n<span class="token comment">// !== 不绝对等于（值和类型有一个不相等，或两个都不相等）</span>\nx<span class="token operator">!==</span><span class="token string">&quot;5&quot;</span> <span class="token boolean">true</span>\nx<span class="token operator">!==</span><span class="token number">5</span> <span class="token boolean">false</span>\n\n<span class="token operator">&amp;&amp;</span> 且\n<span class="token operator">||</span> 或\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取随机值" tabindex="-1"><a class="header-anchor" href="#取随机值" aria-hidden="true">#</a> 取随机值</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//[任意随机值](https://www.runoob.com/w3cnote/js-random.html)</span>\nMath<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//</span>\n<span class="token keyword">var</span> arr01 <span class="token operator">=</span> textSour<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//分割字符数组，主要用于淘口令网</span>\n<span class="token keyword">var</span> arr01 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;打&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;哒&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;达&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">//循环语句，i++会在代码被执行后增加一个值</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> x <span class="token operator">&lt;</span> arr01<span class="token punctuation">.</span>length<span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//存在循环后分割，并跳出循环</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>taokouling<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr01<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ture_tkl01 <span class="token operator">=</span> taokouling<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>arr01<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// https://segmentfault.com/q/1010000006819233 //不重复获取</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rn<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> index <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> count<span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>\n  result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> split_result<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  split_result<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> split_result<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  count<span class="token operator">--</span><span class="token punctuation">;</span>\n  strResult <span class="token operator">=</span> strResult <span class="token operator">+</span> result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',18)],e={},o=(0,a(1935).Z)(e,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])},1935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);