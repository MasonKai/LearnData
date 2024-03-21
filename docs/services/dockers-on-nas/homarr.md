---
article: false
title: Homarr：本地导航
order: 91
---

[Homarr](https://github.com/ajnart/homarr) 是一款强大的本地导航工具，旨在提供一个中心化的页面，通过它，用户可以轻松地访问和控制他们的所有网站书签和状态仪表板。特别适用于管理 NAS 系统中内外网的不同链接，简化了日常的访问和控制流程，让你可以在一个方便的位置访问和控制一切。

在使用 Homarr 过程中，用户可能会遇到一些限制，比如：

- 无法直接添加 `chrome://extensions/` 等非标准链接。
- 图标会远程调用 Github 图库，速度会慢些。

## 部署代码

推荐通过 Docker Compose 部署 Homarr，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: '3'
services:
  homarr:
    container_name: homarr
    image: ghcr.io/ajnart/homarr:latest
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock # Optional, only if you want docker integration
      - /volume1/docker/homarr/configs:/app/data/configs
      - /volume1/docker/homarr/icons:/app/public/icons
      - /volume1/docker/homarr/data:/data
    ports:
      - '7575:7575'
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:7575` 即可使用 Homarr 本地导航。

总的来说，Homarr 提供了一个高效便捷的方式来组织和访问您的所有重要链接，无论是内网还是外网资源。通过简单的 Docker Compose 部署，您可以轻松地在自己的服务器上运行 Homarr，享受到集中管理资源的便利。尽管存在一些限制，如无法添加某些特殊链接和图标加载速度慢的问题，但这些都不妨碍 Homarr 成为一个极具价值的工具。我们鼓励用户根据自己的需求，进一步探索和定制 Homarr，使其成为您日常管理中不可或缺的一部分。
