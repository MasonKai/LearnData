---
article: false
title: Uptime Kuma：轻量运维监控
order: 82
---

[Uptime Kuma](https://github.com/louislam/uptime-kuma) 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。对于检查特定关键词是否存在于网页中等轻量级监控是足够了。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。

![](https://img.newzone.top/2024-03-19-20-14-52.png?imageMogr2/format/webp)

虽然 Uptime Kuma 本身不提供后续自动化操作，但它能够通过 webhook 来触发 n8n 等自动化操作。

## 部署代码

推荐通过 Docker Compose 部署 Uptime Kuma，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: "3.8"

services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma
    volumes:
      - /volume1/docker/uptime-kuma/data:/app/data
      - /var/run/docker.sock:/var/run/docker.sock # 用于 Docker 容器监控
    ports:
      - "3001:3001" # <Host Port>:<Container Port>
    restart: always
```

完成上述部署后，Uptime Kuma 服务将在你的服务器上启动。你可以通过浏览器访问 `http://<你的服务器IP或域名>:3001` 来使用 Uptime Kuma 的监控服务。这将为你提供一个可视化的界面，通过它你可以轻松地添加和管理监控项。
