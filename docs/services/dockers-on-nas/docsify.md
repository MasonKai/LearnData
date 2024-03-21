---
article: false
title: Docsify：私密文件服务器
order: 103
---

在日常工作中，对于需要管理大量包含敏感信息的 Markdown 格式笔记和文档的情况，公开分享显然不是一个合适的选择。Docsify，一个轻量级的文档网站生成器，它支持将 Markdown 文件即时转换为网页格式，非常适合用作个人或团队的文档查看工具。

起初，我尝试通过 ahk 脚本在开机时自动执行 `Run, PowerShell.exe -NoExit -Command &{docsify serve --port 3030}, D:\web\marketing` 命令来启动 Docsify 服务。虽然这种方式可行，但在启动和维护上相对不够方便。因此，为了寻求一种更高效的解决方案，我转向使用 Docker，并创建了一个名为 [docsify-docker](https://github.com/rockbenben/docsify-docker) 的项目，旨在简化部署过程，同时自动检测 docsify-cli 的更新，确保文档服务器始终处于最新状态。

## 部署代码

推荐通过 Docker Compose 部署 Docsify，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: "3.8"

services:
  docsify:
    container_name: docsify-server
    image: rockben/docsify-server
    volumes:
      - /volume1/docker/docsify/docs:/docs # 映射了本地的文档目录到容器内，使得容器可以访问并展示这些 Markdown 文件
    ports:
      - "3310:3000" # 将容器的 3000 端口映射到本地的 3310 端口
    restart: unless-stopped
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:3310`，即可轻松查看和管理你的 Markdown 文档。

Docsify 加上 Docker 的组合，为私密文件的管理和展示提供了一个简便、安全的解决方案。无论是个人笔记、团队协作文件还是企业内部资料，这种方法都能带来快速、安全且易于管理的文档服务体验。开始实践，让你的文档管理变得更加高效和私密。

如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。
