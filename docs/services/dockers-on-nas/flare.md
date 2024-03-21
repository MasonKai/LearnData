---
article: false
title: Flare：快速导航页
order: 93
---

在众多本地导航工具中，[Flare](https://github.com/soulteary/docker-flare) 以其极速的加载时间和强大的功能脱颖而出。相较于其他需要 2-3 秒的加载时间，Flare 只需短短 0.2 秒即可完成加载，大幅提升了效率。

**优势**：

- **本地搜索书签**：Flare 支持高效的本地书签搜索功能，帮助用户迅速找到所需的信息。
- **批量导入书签**：这一功能使得链接的编辑和管理变得异常简便。如果你需要进行批量导入，可以使用我写的 [Flare 书签解析工具](https://tools.newzone.top/data-parser/flare)。

**存在的问题**：Flare 无法打开 `chrome://extensions/` 等非标准格式的链接。

![](https://img.newzone.top/2024-03-21-15-08-37.png?imageMogr2/format/webp)

## 部署代码

推荐通过 Docker Compose 部署 Flare，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: '3.6'

services:
  flare:
    container_name: flare
    image: soulteary/flare
    restart: always
    # 默认无需添加任何参数，如有特殊需求
    # 可阅读文档 https://github.com/soulteary/docker-flare/blob/main/docs/advanced-startup.md
    command: flare
    # 启用账号登陆模式
    # command: flare --nologin=0
    # environment:
      # 如需开启用户登陆模式，需要先设置 `nologin` 启动参数为 `0`
      # 如开启 `nologin`，未设置 FLARE_USER，则默认用户为 `flare`
      # - FLARE_USER=flare
      # 指定你自己的账号密码，如未设置 `FLARE_USER`，则会默认生成密码并展示在应用启动日志中
      # - FLARE_PASS=your_password
      # 是否开启“使用向导”，访问 `/guide`
      # - FLARE_GUIDE=1
    ports:
      - 7570:5005
    volumes:
      - /volume1/docker/flare/app:/app
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:7570`，即可开始使用 Flare 书签导航。

为了获得最佳体验，建议搭配浏览器扩展 [Custom New Tab URL](https://chromewebstore.google.com/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia) 使用，这样可以将浏览器的默认新标签页设置为 Flare 导航页，进一步提升访问效率。
