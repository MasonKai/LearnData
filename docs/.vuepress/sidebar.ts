import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar({
  "": [
    "/DailyRoutine",
    "/Fitness",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "read", link: "https://newzone.top/reading/" },
    // 指定显示页面
    {
      text: "🧰 应用手册",
      icon: "",
      prefix: "/apps/",
      link: "",
      collapsible: true,
      children: [
        "Applist.md",
        "toolbox.md",
        "Chrome.md",
        {
          text: "工具笔记",
          icon: "plugin",
          prefix: "tutorials/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: "直播手册",
          icon: "load",
          prefix: "livestreaming/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: "其他",
          icon: "emmet",
          collapsible: true,
          children: ["design.md", "ChatGPT.md"],
        },
      ],
    },
    {
      text: "🐋 Docker 服务",
      icon: "",
      prefix: "/services/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🪟 系统问题",
      icon: "",
      prefix: "/windows/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🔡 代码编程",
      icon: "",
      prefix: "",
      link: "",
      collapsible: true,
      children: [
        {
          text: "页面开发",
          icon: "",
          prefix: "/web/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "网站部署",
          icon: "",
          prefix: "/deploy/",
          collapsible: true,
          children: [
            "Static.md",
            "CloudServices.md",
            "VPS.md",
            {
              text: "部署工具",
              icon: "emmet",
              collapsible: true,
              children: ["GitHub.md", "Cloudflare.md", "MySQL.md", "DNS.md"],
            },
          ],
        },
        {
          text: "代码学习",
          icon: "",
          prefix: "/code/",
          collapsible: true,
          children: [
            "README.md",
            {
              text: "Basic",
              icon: "emmet",
              collapsible: true,
              children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
            },
            {
              text: "FrondEnd",
              icon: "app",
              collapsible: true,
              children: ["HTML.md", "Javascript.md", "Vue.md", "Python.md"],
            },
          ],
        },
      ],
    },
    {
      text: "🛖 生活记录",
      icon: "",
      prefix: "/family/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "博客文章",
      icon: "blog",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ],
  // 专题区（独立侧边栏）
  "/family/baby/": "structure",
  // 专题区（自定义侧边结构）
  "/services/dockers-on-nas/": [
    {
      text: "🎬 影视音乐",
      icon: "",
      prefix: "",
      collapsible: true,
      children: ["emby.md", "xiaoya.md", "navidrome.md", "mt-photos.md", "xteve.md"],
    },
    {
      text: "📚 娱乐阅读",
      icon: "",
      prefix: "",
      collapsible: true,
      children: ["reader.md", "tachidesk.md"],
    },
    {
      text: "☁️ 同步网盘",
      icon: "",
      prefix: "",
      collapsible: true,
      children: ["syncthing.md", "nextcloud.md", "alist.md"],
    },
    {
      text: "📄 文档管理",
      icon: "",
      prefix: "",
      collapsible: true,
      children: ["docsify.md", "paperless-ngx.md", "gitlab.md"],
    },
    {
      text: "📝 自我记录",
      icon: "",
      prefix: "",
      collapsible: true,
      children: ["memos.md", "srs-stack.md"],
    },
    {
      text: "🔧 监控与自动化",
      icon: "",
      prefix: "",
      collapsible: true,
      children: ["n8n.md", "uptime-kuma.md", "qinglong.md", "ntfy.md", "qbittorrent.md"],
    },
    {
      text: "📡 后端服务",
      icon: "",
      prefix: "",
      collapsible: true,
      children: ["reverse-proxy.md", "cors-anywhere.md", "deeplx.md"],
    },
    {
      text: "其他",
      icon: "",
      prefix: "",
      collapsible: true,
      children: [
        "stirling-pdf.md",
        "grocy.md",
        "grampsjs.md",
        {
          text: "🧭 导航面板",
          icon: "",
          prefix: "",
          collapsible: true,
          children: ["flare.md", "sun-panel.md", "homarr.md"],
        },
      ],
    },
  ],
});
