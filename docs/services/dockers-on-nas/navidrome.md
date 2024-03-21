---
article: false
title: Navidrome：开源音乐服务器
order: 3
---

Navidrome 是一款开源且完全免费的自托管音乐服务器，它提供音频流媒体服务。相比于 Roon 的高昂定价以及 Emby 和 Plex 主要针对视频的定位，Navidrome 为用户提供了一个免费而全面的音频解决方案。它不仅支持 MP3、FLAC、AAC 和 OGG 等多种音频格式，还能为多个用户有效管理音乐库，确保每位用户的体验互不干扰。

![](https://img.newzone.top/2024-03-21-10-21-01.png?imageMogr2/format/webp)

Navidrome 的部署和使用极为简单，支持 Docker 等多种安装方式，具体可以参考 [Navidrome 的官方教程](https://www.navidrome.org/docs/installation/docker/)。

## 部署代码

推荐通过 Docker Compose 部署 Navidrome，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: "3"
services:
  navidrome:
    image: deluan/navidrome:latest
    container_name: navidrome
    #user: 1000:1000 # should be owner of volumes #群晖应该是 1026:100 # 使用 `id 用户名` 可以查看代码
    ports:
      - "4533:4533"
    restart: unless-stopped
    environment:
      # Optional: put your config options customization here. Examples:
      ND_SCANSCHEDULE: 1h
      ND_LOGLEVEL: info
      ND_SESSIONTIMEOUT: 24h
      ND_BASEURL: ""
    volumes:
      - "/volume1/docker/navidrome/data:/data"
      - "/volume4/Music/Audio:/music:ro"
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:4533` 即可访问你的 Navidrome 音乐流服务。

尽管 Navidrome 不内置歌词下载功能，但你可以通过第三方工具，如 [MusicTag](https://www.cnblogs.com/vinlxc/p/11347744.html)，来下载并管理歌词。此外，推荐使用 [音流](https://aqzscn.cn/archives/stream-music-versions) 播放器，它支持 iOS、Android 和 Windows 平台，并能显示下载的内置歌词。

Navidrome 在多用户管理、音乐流稳定性方面表现优异，但也存在一些局限性，如不支持多行歌词显示，搜索功能以专辑为单位，可能不利于精确搜索特定歌曲。
