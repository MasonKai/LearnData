---
article: false
title: Syncthing：私人同步盘
order: 21
---

[Syncthing](https://github.com/syncthing/syncthing/blob/main/README-Docker.md) 是一款开源免费的跨平台文件同步工具，基于 P2P 技术实现多设备之间的文件同步。与其他同步工具如微力同步不同，Syncthing 专注于设备间的文件同步，而不是本地文件夹的镜像。我之前尝试使用 GoodSync 来实现同一设备上不同文件夹的同步。

![](https://img.newzone.top/2024-03-21-09-39-47.png?imageMogr2/format/webp)

不同于百度网盘、坚果云等第三方网盘服务，Syncthing 的最大特点是实现了多设备间的实时同步。例如，百度网盘虽支持 PC 端同步，但无法在手机端实现，用户需手动下载文件以查看；坚果云虽然支持在手机端设置离线收藏，但下载的文件仅存储在应用内部空间，无法被其他应用访问。相比之下，Syncthing 默认将文件夹同步到本地设备，提供了更为直接和便利的文件访问方式。对于那些不愿意将文件托管到第三方服务，或者需要在多个设备之间同步文件的用户而言，Syncthing 提供了一个值得考虑的选择。

## 部署代码

推荐通过 Docker Compose 部署 Syncthing，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: "3"
services:
  syncthing:
    image: syncthing/syncthing
    container_name: syncthing
    hostname: syncthing
    environment:
      - PUID=1026
      - PGID=100
    volumes:
      - /volume1/docker/syncthing/appdata:/var/syncthing
    network_mode: host # 避免本地同步速率变慢
    restart: unless-stopped
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:8384`，即可进入 Syncthing 的管理界面。

如果遇到报错「文件系统监视器错误」，则在 NAS 终端输入 `echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.conf` 来解除 inotify 限制。更多解决办法参考 [How do I increase the inotify limit to get my filesystem watcher to work?](https://docs.syncthing.net/users/faq.html#inotify-limits)。

虽然我个人对文件实时同步的需求不大，且不需要版本控制，因此目前并未使用 Syncthing。我更倾向于将本地文件按天同步到 NAS 设备，然后在 Nextcloud 上进行在线文档编辑，这种方式更符合我的工作流程。

总的来说，Syncthing 作为一款开源且免费的文件同步工具，以其独特的 P2P 同步方式和跨平台支持，为希望在多个设备间保持数据实时同步的用户提供了一个极佳的选择。它适用于工作文档的同步、个人设备间的媒体文件分享等多种场景。如果你追求数据的私有化，或者需要一个灵活、可靠的文件同步解决方案，我鼓励你尝试 Syncthing，探索它带来的各种可能性。
