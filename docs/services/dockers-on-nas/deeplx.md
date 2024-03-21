---
article: false
title: DeepLX：如何免费使用 DeepL 翻译接口
order: 102
---

[DeepLX](https://github.com/OwO-Network/DeepLX/) 提供了一个基于 DeepL 的免费翻译服务。它可以将 DeepL Free API 转换为本地 API，使得第三方程序能够方便地使用 DeepL 提供的翻译功能。[json-translate](https://tools.newzone.top/json-translate) 的免费翻译功能便是基于 DeepLX 所开发，使用户能够迅速完成文本翻译。

## 部署代码

推荐通过 Docker Compose 部署 DeepLX，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: "3.8"

services:
  deeplx:
    image: ghcr.io/owo-network/deeplx:latest
    container_name: deeplx
    restart: always
    ports:
      - "32770:1188"
    # environment:
    # 如果设置了 TOKEN，则每个请求都需要包含 Authorization 标头。
    # - TOKEN=helloworld
    # 如果设置了 AUTHKEY，在 429 响应（请求过多/过快）后，会使用官方的 AuthKey 进行请求。如果同时使用多个 authKey，需要用逗号分隔。
    # - AUTHKEY=xxxxxxx:fx
```

如果你已经注册了 DeepL 的免费接口，建议设置 AUTHKEY。这样，一旦遇到请求频率过快的情况，DeepLX 会自动使用官方的 AuthKey 进行请求，从而加快翻译速度，提高效率。

部署完成后，将 DeepLX 接口 `http://<你的服务器IP或域名>:32770/translate` 填到翻译应用上，即可免费使用 DeepL 翻译接口。
