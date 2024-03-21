---
article: false
title: SRS Stack：直播推流
order: 83
---

SRS 是一个免费开源的实时视频服务器应用，通过 [SRS Stack](https://github.com/ossrs/srs-stack)，用户能够在多平台上进行简单高效的直播同步推流部署，大大简化了直播过程中的技术复杂度。

![](https://img.newzone.top/2024-03-21-09-45-33.png?imageMogr2/format/webp)

在我的日常工作和学习中，我通常会进行直播活动。然而，直接从我的电脑上向多个直播平台推送视频流，会对我的上传带宽造成较大压力。SRS Stack 提供了一种高效的解决方案，它允许我只推送一路流到 NAS 上的 SRS Stack，然后由 SRS Stack 负责将流转播到多个平台。这种方法不仅节省了宝贵的上行带宽，还简化了直播设置，避免了同时管理多个推流的复杂性。

需要注意的是，SRS Stack 目前支持的转播数量有限，最多同时进行三个平台的转播。对于需要更广泛转播的用户，一种可能的解决方案是运行多个 SRS Stack 实例，尽管这可能会增加管理复杂度。

## 部署代码

推荐通过 Docker Compose 部署 SRS Stack，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: "3"
services:
  srs-stack:
    image: registry.cn-hangzhou.aliyuncs.com/ossrs/srs-stack:5
    container_name: srs-stack
    volumes:
      - /volume1/docker/srs-stack/data:/data
    ports:
      - 23322:2022
      - 23323:2443
      - 1935:1935
      - 8000:8000/udp
      - 10080:10080/udp
    restart: always
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:23322`，即可进入 SRS Stack 的管理界面，开始设置直播推流。

SRS Stack 通过简化直播推流的部署和管理，为内容创作者和技术团队提供了强大的支持。无论你是直播新手还是经验丰富的直播者，都可以从 SRS Stack 的便捷性和高效性中受益。
