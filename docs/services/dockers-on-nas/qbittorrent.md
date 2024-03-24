---
article: false
title: qBittorrent：种子&磁力下载
order: 5
---

[qBittorrent](https://registry.hub.docker.com/r/linuxserver/qbittorrent/) 是一款受欢迎的开源免费软件，它支持种子和磁力链接下载。以用户友好的界面、稳定的下载性能著称，qBittorrent 为用户提供了一个高效管理和下载文件的平台。无论您是下载爱好者还是寻求高效文件传输方式的专业用户，qBittorrent 都能满足您的需求。

![](https://img.newzone.top/2024-03-19-19-49-15.png?imageMogr2/format/webp)

## 使用问题

### 无法登录

如果你在尝试登录 qBittorrent 时遇到问题，即使密码正确但依然提示错误。这时可以通过修改`config/qBittorrent/qBittorrent.conf`文件中的设置来解决这个问题：

- 将`WebUI\AuthSubnetWhitelist`的值设置为`0.0.0.0/0`。这个操作允许任何 IP 地址的用户访问 WebUI，而无需密码。这样做的目的是确保用户可以无障碍地登录管理界面，但请注意，这可能会降低安全性。建议仅在安全的网络环境下使用此设置。

另外，我在 flare 网页书签访问 qBittorrent 链接被提示 `Unauthorized`，但直接访问是正常的。

### PT 下载设置

在使用 qBittorrent 进行 PT（Private Tracker）下载时，建议关闭`BitTorrent - DHT`和其他隐私选项。

### 下载速度慢的问题

下载速度可能受到多种因素的影响。如果您遇到下载速度慢的问题，请尝试以下解决方案：

- 确保 NAS 中的下载路径设置了 Everyone 权限，以便 qBittorrent 可以访问和写入文件。
- 检查 qBittorrent 的监听端口是否有修改，确保端口设置正确。
- 避免使用默认的 6881 端口进行下载，改用其他端口可以减少冲突和潜在的连接问题。

## 部署代码

推荐通过 Docker Compose 部署 qBittorrent，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
# https://hub.docker.com/r/linuxserver/qbittorrent  注意将下载目录授权到 Everyone
version: "2.1"
services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1026
      - PGID=100
      - TZ=Asia/Shanghai
      - WEBUI_PORT=49155
    volumes:
      - /volume1/docker/qbittorrent/config:/config
      - /volume2/Backup/downloads:/downloads
      # - /volume1/tvshows:/tvshows
      # - /volume4/movies:/movies
    ports:
      - 49155:49155
      - 49156:49156
      - 49156:49156/udp
    restart: unless-stopped
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:49155` 即可使用 qBittorrent 下载。然后，进入「选项」>「连接」，将监听端口改为 49156，以避免默认端口问题。

有关其他设置，请参考[群晖使用 qbittorrent](https://blog.csdn.net/weixin_45120915/article/details/114691473)。
