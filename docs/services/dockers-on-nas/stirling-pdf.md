---
article: false
title: Stirling-PDF：开源 PDF 处理工具
order: 31
---

[Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) 是一款开源的 PDF 文档工具箱，它集成了众多处理 PDF 文件所需的功能，如拆分合并、转换、重新组织、添加图像、旋转、压缩等，非常适合日常使用。无论是需要将多个 PDF 文件合并为一个文件以便于阅读，还是将一个文件拆分成多个部分以便于分享，Stirling-PDF 都能帮助你轻松完成。此外，它还支持将 PDF 转换为其他格式，使文件共享和编辑变得更加便捷。

![](https://img.newzone.top/2024-01-16-02-15-55.png?imageMogr2/format/webp)

## 部署代码

推荐通过 Docker Compose 部署 Stirling-PDF，详情请见 [Docker Compose 部署教程](./#%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B)。以下是 Docker Compose 配置示例：

```yml
version: '3.3'
services:
  stirling-pdf:
    image: frooodle/s-pdf:latest
    container_name: stirling-pdf
    ports:
      - '7581:8080' # 将容器的 8080 端口映射到主机的 7581 端口，以便于访问
    volumes:
      #- /location/of/trainingData:/usr/share/tesseract-ocr/5/tessdata #Required for extra OCR languages
      - /volume1/docker/s-pdf/configs:/configs # 指定配置文件存放位置
      #- /location/of/customFiles:/customFiles/
      #- /location/of/logs:/logs/
    environment:
      - DOCKER_ENABLE_SECURITY=false # 为了简化部署，暂时关闭 Docker 的安全设置
```

部署完成后，通过浏览器访问 `http://<你的服务器IP或域名>:7581` 即可使用 Stirling-PDF 工具箱。
