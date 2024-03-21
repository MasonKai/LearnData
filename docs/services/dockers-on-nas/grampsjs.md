---
article: false
title: Gramps.js：在线家谱
order: 35
---

[Gramps.js](https://github.com/gramps-project/Gramps.js) 是一款用于协作族谱编辑与展示的 Web 开源应用。它基于领开源家谱桌面应用程序 Gramps，并可与 Gramps 交互操作。不过，Gramps.js 的输入过程相对复杂，需要分别添加成员、家庭、事件、地点等元素，然后将它们组合在一起。第一次配置可能会花费一些时间，使用教程参考 [Gramps Web User guide](https://www.grampsweb.org/user-guide/)。

## 部署代码

推荐通过 Docker Compose 部署 Gramps.js，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
# https://www.grampsweb.org/Deployment/
# https://github.com/gramps-project/web/blob/main/examples/docker-compose-base/docker-compose.yml

version: "3.7"

services:
  grampsweb: &grampsweb
    image: ghcr.io/gramps-project/grampsweb:latest
    container_name: grampsweb
    restart: always
    ports:
      - "23300:5000" # host:docker
    environment:
      GRAMPSWEB_TREE: "Gramps Web" # will create a new tree if not exists
      GRAMPSWEB_CELERY_CONFIG__broker_url: "redis://grampsweb_redis:6379/0"
      GRAMPSWEB_CELERY_CONFIG__result_backend: "redis://grampsweb_redis:6379/0"
      GRAMPSWEB_RATELIMIT_STORAGE_URI: redis://grampsweb_redis:6379/1
    depends_on:
      - grampsweb_redis
    volumes:
      - /volume1/docker/grampsjs/users:/app/users # persist user database
      - /volume1/docker/grampsjs/index:/app/indexdir # persist search index
      - /volume1/docker/grampsjs/thumb_cache:/app/thumbnail_cache # persist thumbnails
      - /volume1/docker/grampsjs/cache:/app/cache # persist export and report caches
      - /volume1/docker/grampsjs/secret:/app/secret # persist flask secret
      - /volume1/docker/grampsjs/db:/root/.gramps/grampsdb # persist Gramps database
      - /volume1/docker/grampsjs/media:/app/media # persist media files
      - /volume1/docker/grampsjs/tmp:/tmp

  grampsweb_celery:
    <<: *grampsweb # YAML merge key copying the entire grampsweb service config
    ports: []
    container_name: grampsweb_celery
    depends_on:
      - grampsweb_redis
    command: celery -A gramps_webapi.celery worker --loglevel=INFO

  grampsweb_redis:
    image: redis:alpine
    container_name: grampsweb_redis
    restart: always
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:23300` 即可生成你的家谱。

通过仔细规划和执行上述步骤，你将能够成功地将家族族谱电子化并利用 Gramps.js 管理。这个过程不仅是对家族历史的保存，也是对家族成员之间联系的加强。在此过程中，耐心和细致是成功的关键。祝你的电子族谱项目顺利进行，成为家族历史传承的宝贵财富。
