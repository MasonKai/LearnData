---
article: false
title: Emby：家庭媒体中心
order: 1
---

Emby 提供了一个功能丰富的家庭媒体服务器解决方案，允许用户在家庭网络内部或外部流式传输视频、音乐和照片。配置 Emby 时，关键是确保媒体库目录对 Emby 服务器有足够的访问权限。为此，你需要设置共享文件夹的权限，选择对应的系统用户，并确保它具有读写权限，使得 Emby 能够无障碍地访问媒体文件。

Emby 的视频播放和直播功能需要 Emby Premiere 订阅。终身会员的一次性购买价格为 119 美元，但通常在黑五促销期间，你可以以 99 美元的优惠价格购买。需要注意的是，Emby 对于蓝光格式，如 ISO 文件的支持相对有限。

## 电视直播

购买了 Emby 授权并拥有有效的 m3u 文件后，就可以在多种设备上观看直播电视了。m3u 文件是一个文本格式文件，包含了电视直播流的网络地址，使 Emby 能够抓取并播放内容。然而，IPv4 地址可能会快速过期，而 IPv6 地址则可能需要在路由器上进行额外设置。你可以通过访问 [IPv6 连接测试](https://test-ipv6.com/) 来检查网络支持情况。

考虑到稳定性和易管理性，自制 IPTV 源是一个好选择。推荐使用 [fanmingming live](https://github.com/fanmingming/live) 来制作 IPTV 文件。此外，还可以在 <https://iptv-org.github.io/> 和 <http://tonkiang.us> 查找更多电视源。

将编辑好的 m3u 文件保存至 Emby 服务器的 `config` 目录下，例如 `/config/config/IPTV.m3u`。添加电视源时，请按照以下步骤操作：

1. 选择“M3U”作为源类型。
2. 输入 m3u 文件路径，如 `/config/config/IPTV.m3u`。
3. 勾选“允许使用频道编号映射指南数据”。

在设置“指南数据源”时，可以选择中国作为国家，并将指南数据来源设置为 XmlTV。在`文件或 URL`输入框中，输入 `https://live.fanmingming.com/e.xml`，其他设置可以保持默认。

如果拥有多个 IPTV 源，可考虑使用 xTeVe 工具整合管理这些源。xTeVe 的部署和使用方法可参考 [XTeVe：自制 IPTV 服务器](https://newzone.top/services/dockers-on-nas/xteve.html)的指南。大多数情况下，直接在 Emby 中管理源已经足够。

## 使用技巧

### 添加媒体库

在设置媒体库时，应注意中国在列表中按简称“PRC”排列，在字母 P 下进行查找。

### 刮取元数据

为了便于管理和统一规则，建议使用 tinyMediaManager 刮取影视元数据。你可以参考小雅提供的[详细教程](https://xiaoyaliu.notion.site/dc28a32c807d418691b83519fa523306)来进行设置。

### 移除合集

如果你为家人设置了独立账户并设定了不同的媒体库权限，你会发现「合集」会自动显示在所有账户上。

登录相应的用户，在 Emby 设置界面选择「主屏幕」>「合集」，取消勾选「在主屏幕显示」。这样当前的账户就不会再显示合集信息了。然后在其他账户中也进行同样的操作，这样其他账户也不会再显示合集信息。尽管页面上会保留合集的菜单，但如果不想让敏感内容显示在合集中，可以在各自的账户中设置媒体文件夹权限。

### 安全地从外部访问

如果你计划从外部访问 Emby，强烈建议启用 HTTPS。具体配置步骤可参考[这篇指南](https://www.bilibili.com/read/cv14814465/)。简单来说：

1. 设置家庭网络的 DDNS（通常通过路由器完成）。
2. 下载与域名匹配的 Tomcat 证书版本。
3. 将 pfx 文件和含密码的 txt 文件放置在指定的 config 目录路径中。
4. 在 Emby 的 `服务器 > 网络` 设置中，填写公共端口和 DDNS 域名。
5. 启用安全连接模式，确保数据传输安全。

![](https://img.newzone.top/2023-09-15-05-32-43.png?imageMogr2/format/webp)

如果你觉得直接在 Emby 中配置 SSL 证书过于复杂，可以考虑使用 [Nginx Proxy Manager](https://newzone.top/services/dockers-on-nas/reverse-proxy.html) 这样的反向代理工具。

## 部署代码

推荐通过 Docker Compose 部署 Emby，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
# https://hub.docker.com/r/linuxserver/emby
version: "2.1"
services:
  emby:
    image: lscr.io/linuxserver/emby:latest
    container_name: emby
    environment:
      - PUID=1026
      - PGID=100
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/emby/config:/config
      # 媒体库映射
      - /volume1/tvshows:/data/tvshows
      - /volume4/movies:/data/movies
      - /volume3/Anime:/data/anime
      - /volume4/Documentary:/data/documentary
      - /volume4/Music/MV:/data/MV
      - /volume4/Music/Audio:/data/Audio
      #- /opt/vc/lib:/opt/vc/lib #optional
    ports:
      - 8096:8096
      - 8920:8920
    restart: unless-stopped
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:8096` 利用 Emby 作为家庭媒体中心，享受高质量的媒体娱乐体验。
