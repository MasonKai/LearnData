---
article: false
title: Portainer：容器管理工具
order: 103
---

[Portainer](https://github.com/portainer/portainer) 是一款开源的容器管理工具，它为 Docker 和 Kubernetes 提供了一个简洁易用的界面，让用户可以轻松管理容器、镜像、网络和卷等资源。作为一个强大的容器管理平台，Portainer 降低了容器技术的入门门槛，同时也满足了专业用户的高级需求。

Portainer 支持两个主要版本：社区版（CE）和企业版（EE）。对于个人用户和小型团队来说，社区免费版（CE）通常就已经足够使用，它提供了大多数基础和一些高级的功能，我没有感觉到任何功能限制。

![](https://img.newzone.top/2024-03-21-15-37-16.png?imageMogr2/format/webp)

## 部署 Portainer 社区版（CE）

下面提供了一个 docker-compose.yml 文件示例，用于部署 Portainer 社区版（CE）。具体的部署步骤可以查阅 [Docker Compose 部署](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)教程：

```yml
version: "3"
services:
  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    ports:
      - 9004:8000 # 用于 Edge agent 通信
      - 9000:9000 # Portainer 网页界面
    environment:
      - TZ=Asia/Shanghai
    volumes:
        - /var/run/docker.sock:/var/run/docker.sock  # 允许 Portainer 管理本地 Docker 环境
        - /volume1/docker/portainer:/data # 持久化 Portainer 数据
    restart: unless-stopped
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:9000` 即可看到 Portainer 的登录界面。初次访问时，你需要设置一个管理员账号和密码。

## Portainer 功能

- **容器管理**：轻松启动、停止、删除和管理容器。
- **镜像管理**：拉取新镜像、删除旧镜像和管理镜像标签。
- **网络管理**：创建和管理 Docker 网络，轻松连接不同的容器。
- **卷管理**：创建和删除 Docker 卷，管理数据持久化。

此外，Portainer 还为 Docker Compose 提供了界面化的部署流程，进一步简化了容器部署和管理过程。具体可查阅 [Portainer 部署](./#portainer-%E9%83%A8%E7%BD%B2)教程。

无论你是刚入门容器技术的新手，还是拥有丰富经验的专业人士，Portainer 都能帮助你有效提升工作效率，优化容器管理流程，实现更高效的资源管理与应用部署。
