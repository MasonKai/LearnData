---
article: false
title: ntfy：跨平台的消息通知
order: 23
---

[ntfy](https://docs.ntfy.sh/install/#docker) 是一个支持网页、安卓、iOS 等多平台的消息通知服务，允许用户在不创建账户的情况下发送和接收通知。ntfy 的设计宗旨是简单易用，旨在提供低门槛的访问和通知传递。用户可以通过简单的 URL 发送和接收通知，这些 URL 可通过随机生成以增加隐私性。

使用 ntfy，尤其在配置 NAS 端与 Nginx Proxy Manager 来反向代理 Docker 服务时，用户可能遇到地址带端口导致无法打开管理页面或消息无法推送的问题。为此，推荐使用 ntfy 的官方服务器或通过 Cloudflare Tunnel 等服务进行穿透，以规避这些潜在问题。

## 如何使用 ntfy

### 订阅主题

在 ntfy 中，接收消息是基于主题的。主题类消息并不受密码保护，增加了使用过程中的隐私考虑。不控制接收方的情况下，**任何知道服务器地址和主题名称的人都可以接收消息通知或发布更新**。因此，选择一个不容易被猜到的主题名至关重要。

### 注意事项

- **服务器作为中转站：** ntfy 服务器仅作为消息的中转站，这意味着您需要在每台想要接收通知的设备上重新配置和订阅消息。
- **公开推送的消息：** ntfy 设计时考虑到消息的公开性，虽然大部分消息是公开推送的，但用户依然可以控制消息的接收方。
- **桌面提醒的解决方案：** 虽然 ntfy 本身没有专门的桌面应用，但 PC 用户可以通过安装 [ntfy-browser](https://github.com/johman10/ntfy-browser) 浏览器扩展来接收通知。

## 部署命令

```yml
version: "2.3"

services:
  ntfy:
    image: binwiederhier/ntfy
    container_name: ntfy
    command:
      - serve
    environment:
      - TZ=Asia/Shanghai
    user: 1026:100 # optional: replace with your own user/group or uid/gid
    volumes:
      - /volume1/docker/ntfy/cache:/var/cache/ntfy
      - /volume1/docker/ntfy/etc:/etc/ntfy
    ports:
      - 5730:8080
    healthcheck: # optional: remember to adapt the host:port to your environment
        test: ["CMD-SHELL", "wget -q --tries=1 http://localhost:5730/v1/health -O - | grep -Eo '\"healthy\"\\s*:\\s*true' || exit 1"]
        interval: 60s
        timeout: 10s
        retries: 3
        start_period: 40s
    restart: unless-stopped
```

**配置注意**：默认情况下，ntfy 使用 80 端口，但更改为 8080 端口可以避免潜在的冲突。您需要在`/volume1/docker/ntfy/etc`目录下新建`server.yml`文件，并添加`listen-http: ":8080"`配置。查看更多服务器配置选项，可以参考[官方配置样例](https://github.com/binwiederhier/ntfy/blob/main/server/server.yml)。
