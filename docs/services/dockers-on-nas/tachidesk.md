---
article: false
title: Tachidesk：漫画聚合阅读器
order: 12
---


[Tachidesk](https://github.com/Suwayomi/docker-tachidesk) 是一个免费且开源的漫画阅读器，提供了一种便捷的方式来订阅和聚合来自不同源的漫画。它支持在多种客户端上部署，使得用户能够享受统一且舒适的漫画阅读和管理体验。为了获得最佳的阅读体验，建议将 Tachidesk-Server 部署在 NAS 上，并通过网页端进行访问，以实现类似于移动应用的操作习惯。

对于仅使用 Android 设备的用户，可以考虑使用 [Tachiyomi](https://github.com/tachiyomiorg/tachiyomi)——一款同样优秀的开源漫画阅读器。而那些寻找老旧漫画作品的读者，则可以试试 [Cimoc](https://github.com/Haleydu/Cimoc)。

## 配置指南

- **本地漫画导入**：你可以将本地漫画资源导入到路径 `/volume1/docker/tachidesk/local` 中。需要注意的是，导入的漫画应按文件夹分类，并确保图片按文件名排序。
- **漫画源设置**：首先，点击界面左侧的 `Extensions` 按钮，并在右上角选择 `Enabled Languages` 选项，将其设置为中文，以便在页面底部发现中文漫画源。安装所需的漫画源扩展之后，点击左侧的 `Sources` 按钮，并选择相应来源的 `BROWSE` 选项，即可浏览对应源的在线漫画。这些在线漫画将被下载到 `/volume1/docker/tachidesk/downloads` 目录下，让你能够方便地进行在线搜索、阅读和下载漫画。

## 部署代码

推荐通过 Docker Compose 部署 Tachidesk，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: "3.7"
services:
  tachidesk-docker:
    image: ghcr.io/suwayomi/tachidesk:latest
    container_name: tachidesk-docker
    environment:
      - TZ=Asia/Shanghai # Use TZ database name from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      - DEBUG=false
      - BIND_IP=0.0.0.0
      - BIND_PORT=4567
      - SOCKS_PROXY_ENABLED=false
      - DOWNLOAD_AS_CBZ=true
      #- MAX_PARALLEL_UPDATE=3
      #- BASIC_AUTH_ENABLED=true
      #- BASIC_AUTH_USERNAME=manga
      #- BASIC_AUTH_PASSWORD=hello123
    volumes:
      - /volume1/docker/tachidesk:/home/suwayomi/.local/share/Tachidesk
    ports:
      - "4567:4567"
    restart: on-failure:3
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:4567` 即可在线阅读本地漫画。
