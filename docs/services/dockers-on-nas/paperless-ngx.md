---
article: false
title: Paperless-ngx：全文管理文档
order: 32
---

[Paperless-ngx](https://docs.paperless-ngx.com/) 是一个强大的开源文档管理系统，它可以将您的物理文档通过 OCR 转换成可搜索的数字档案。支持包括 PDF、图片、纯文本文件以及 Office 文档等多种格式，Paperless-ngx 能够极大地提高您文档管理的效率和便捷性。

![](https://img.newzone.top/2024-03-21-10-56-33.png?imageMogr2/format/webp)

选择 Paperless-ngx 的原因在于其强大的文档扫描、识别和管理功能。通过 OCR 技术，即使是图像扫描的文档也能添加上可搜索和可选择的文本，极大地方便了日后的文档检索和管理。

## 部署代码

推荐通过 Docker Compose 部署 Paperless-ngx，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
# https://github.com/paperless-ngx/paperless-ngx/blob/main/docker/compose/docker-compose.portainer.yml
version: "3.4"
services:
  paperlessbroker:
    image: docker.io/library/redis:7
    container_name: paperlessbroker
    restart: unless-stopped
    volumes:
      - /volume1/docker/paperless-ngx/redisdata:/data

  paperlessdb:
    image: docker.io/library/postgres:15
    container_name: paperlessdb
    restart: unless-stopped
    volumes:
      - /volume1/docker/paperless-ngx/pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: paperless
      POSTGRES_USER: paperless
      POSTGRES_PASSWORD: paperless

  paperlesswebserver:
    image: ghcr.io/paperless-ngx/paperless-ngx:latest
    container_name: paperlesswebserver
    restart: unless-stopped
    depends_on:
      - paperlessdb
      - paperlessbroker
    ports:
      - "9035:8000"
    healthcheck:
      test:
        ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:8000"]
      interval: 30s
      timeout: 10s
      retries: 5
    volumes:
      - /volume1/docker/paperless-ngx/data:/usr/src/paperless/data
      - /volume1/docker/paperless-ngx/media:/usr/src/paperless/media
      - /volume1/docker/paperless-ngx/export:/usr/src/paperless/export
      - /volume1/docker/paperless-ngx/consume:/usr/src/paperless/consume
    environment:
      PAPERLESS_REDIS: redis://paperlessbroker:6379
      PAPERLESS_DBHOST: paperlessdb
      USERMAP_UID: 1026
      USERMAP_GID: 100
      # paperless 支持的语言（已内置英语、德语、意大利语、法语）
      # See https://packages.debian.org/search?keywords=tesseract-ocr-&searchon=names&suite=buster
      # for available languages.
      PAPERLESS_OCR_LANGUAGES: chi-sim chi-tra
      # OCR 语言
      PAPERLESS_OCR_LANGUAGE: eng+chi_sim
      PAPERLESS_SECRET_KEY: change-me
      PAPERLESS_TIME_ZONE: Asia/Shanghai
```

部署完成后，需用 ssh 终端执行以下命令：

```shell
sudo docker exec -it paperlesswebserver bash
python3 manage.py createsuperuser
```

按照提示输入用户名、电子邮件和密码即可。如果出现提示密码较弱，输入 `y` 继续。之后这些配置都可以在后台再修改。

完成以上步骤后，通过 `http://<你的服务器IP或域名>:9035` 访问 Paperless-ngx，开始享受高效的文档管理体验。
