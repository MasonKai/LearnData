---
article: false
title: Alist：聚合网盘
order: 23
---

[Alist](https://alist.nn.ci/zh/guide/install/docker.html) 是一款支持多种存储服务的文件列表程序，它允许用户将文件保存在本地存储、阿里云盘、OneDrive、Google Drive 等多个平台上。对于需要将大文件分享且受限于免费云存储服务大小限制的用户来说，Alist 提供了一个理想的解决方案，使其成为私人轻量级网盘分享应用的绝佳选择。

![](https://img.newzone.top/2024-03-21-15-35-43.png?imageMogr2/format/webp)

## 重置密码

Alist 在启动时会随机生成密码。如果没有在后端看到密码，可以使用以下命令重新生成密码。

```Shell
# 随机生成一个密码
sudo docker exec -it alist ./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
sudo docker exec -it alist ./alist admin set NEW_PASSWORD
```

## 添加存储

登录后，点击左侧菜单的「存储」，添加网盘。下方提供了添加驱动所需的几个必备参数说明。

- 「驱动」表示网盘的挂载方式，例如选择阿里云盘时，请选择「阿里云盘 Open」。
- 「挂载路径」相当于文件夹名称，你可以自由设置。我分享的是应用，所以挂载路径是 `/apps`。
- 「缓存过期时间」是存储的有效时间，默认为 30 分钟。如果你希望存储长期有效，可以将其修改为 0。
- 「根文件夹 ID」指的是在分享网盘中特定文件夹的标识。若要分享整个网盘，请使用 root。
- 「刷新令牌」是网盘的登录密钥，请按照 Alist 说明文档进行添加。

## 元信息

元信息可以为指定文件夹添加密码，防止网盘恶意访问/分享致帐号被冻结。元信息内的配置仅对**访客**生效。

- 密码：访问此路径需要密码。
- 写入：允许访客新建目录、新文件和上传文件。
- 隐藏：此路径要隐藏的对象，每行一个正则表达式。
- 说明：进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。

## 部署代码

推荐通过 Docker Compose 部署 Alist，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: "3.3"
services:
  alist:
    image: xhofe/alist:latest
    container_name: alist
    volumes:
      - /volume1/docker/alist/data:/opt/alist/data
    ports:
      - 9044:5244
    environment:
      - PUID=1026
      - PGID=100
      - UMASK=022
      - TZ=Asia/Shanghai
    restart: always
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:9044` 即可使用 Alist 管理和分享文件。

Alist 提供了一个高效、灵活的方式来聚合和管理分散在不同存储服务中的文件。无论是个人还是团队，都可以从中受益，享受到便捷的文件管理和分享体验。希望这篇文章能帮助你更好地理解和使用 Alist。如果在使用过程中遇到任何问题，欢迎交流探讨解决方案。
