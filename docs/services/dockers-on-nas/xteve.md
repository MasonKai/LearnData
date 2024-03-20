---
article: false
title: XTeve：自制 IPTV 服务器
order: 5
---

[XTeVe](https://github.com/xteve-project/xTeVe) 是一款功能强大的 IPTV 管理工具，专为那些希望合并、管理和定制 IPTV 源的用户设计。无论是合并 M3U 或 XMLTV 文件，自动更新这些文件，还是导出供 Plex 和 Emby 使用，xTeVe 都能提供灵活的解决方案。此外，xTeVe 还支持频道过滤、频道信息编辑（包括名称、台标、分组、排序和分类）、为每个频道设置独立的节目单、设置缓存等高级功能。

Github 和 Gitee 上有许多 IPTV 源。例如，国外的 IPTV 源可以通过 <https://github.com/iptv-org/iptv> 获取。同时，您可以通过以下链接进行频道搜索：<https://iptv-org.github.io/> 和 <http://tonkiang.us>。

xTeVe 的默认端口是 34400，其管理界面可通过访问 `:34400/web/` 来进入。

## 设置指南

在 xTeVe 中的基本设置包括：

- **Numver of tuners（调谐器数量）**：设置为 10
- **EPG Source（电子节目指南源）**：在本例中使用的是 Emby（PMS 选项）
- **M3U Playlist（M3U 播放列表）**：可以使用 <https://iptv-org.github.io/iptv/index.m3u>

## 与 Emby 结合使用

在 Emby 中配置 xTeVe，需要进入 `设置 > 服务器 > 电视直播`。在设置「电视源」时，选择 `HD Homerun` 并输入 xTeVe 配置好的地址 `http://192.168.2.3:34400/`，同时确保勾选了「允许硬件转码」。

![](https://img.newzone.top/2024-03-20-15-38-46.png?imageMogr2/format/webp)

对于「指南数据源」的配置，选择 China 作为国家，XmlTV 作为指南数据来源，文件或 URL 输入 `http://epg.51zmt.top:8000/e.xml`，其他设置保持默认。

## 部署 xTeVe

以下是 xTeVe 部署的 Docker Compose 配置示例：

```yml
version: '3'
services:
  xteve:
    image: alturismo/xteve_guide2go
    container_name: xteve
    network_mode: host
    environment:
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/xteve:/root/.xteve:rw
      - /volume1/docker/xteve/config:/config:rw
      - /volume1/docker/xteve/guide2go:/guide2go:rw
      - /volume1/docker/xteve/tmp:/tmp/xteve:rw
      - /volume1/docker/xteve/tvh:/TVH  # 电视录播，非必须
    logging:
      options:
        max-size: '10m'
        max-file: '3'
```

通过上述配置和步骤，您可以搭建一个个性化、高效管理的 IPTV 服务器，享受丰富多样的电视直播内容。无论是家庭娱乐还是个人爱好，xTeVe 都能满足您的需求，为您提供更自由、更灵活的电视观看体验。
