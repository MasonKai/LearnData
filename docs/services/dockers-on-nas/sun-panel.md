---
article: false
title: Sun-Panel：简化导航页
order: 92
---

[Sun-Panel](https://github.com/hslr-s/sun-panel) 是一个开源项目，旨在为用户提供一个简洁、易用的导航页面，让用户能够快速访问自己的常用网站和服务。与功能更为丰富、界面更加复杂的 Homarr 相比，Sun-Panel 提供了更为简约的样式和功能，适合那些偏好简化界面的用户。

![](https://img.newzone.top/2024-03-21-09-53-45.png?imageMogr2/format/webp)

Sun-Panel 的一大亮点是提供了[浏览器书签转换工具](https://hslr-s.github.io/sun-panel-tool-page/#/)，这个工具可以帮助用户将浏览器中保存的书签批量导入到 Sun-Panel 中，极大地简化了个性化设置的过程。用户只需将书签导出为 HTML 文件，然后通过该工具转换并上传至 Sun-Panel，即可快速完成书签的迁移和整合。

## 部署代码

推荐通过 Docker Compose 部署 Sun-Panel，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: "3.2"

services:
  sun-panel:
    image: "hslr/sun-panel:latest"
    container_name: sun-panel
    volumes:
      - /volume1/docker/sun-panel/conf:/app/conf
      - /volume1/docker/sun-panel/uploads:/app/uploads
      - /volume1/docker/sun-panel/database:/app/database
    ports:
      - 7580:3002
    restart: always
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:7580` 即可访问 Sun-Panel 书签。
