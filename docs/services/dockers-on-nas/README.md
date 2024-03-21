---
article: false
index: false
title: NAS 应用集合
icon: process
---

随着网络附加存储（NAS）在个人和小型企业中的广泛应用，它不仅是数据存储的理想选择，也成为了部署各种 Docker 服务、完成个人自动化工作流程的强大平台。探索 [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) 可以发现多种自部署服务，这些服务适合在 NAS 上运行，覆盖从网页应用到服务器软件等广泛领域。

## 部署教程

### Docker Compose 部署

使用 `docker-compose.yml` 文件进行 Docker 部署不仅简便高效，而且适用于各种 NAS 系统，包括但不限于群晖、Qnap、Unraid 等。此处以群晖 NAS 为例，介绍通过 Docker Compose 部署应用的过程，而在其他系统上的操作流程大同小异。

1. **启用 SSH 功能**：
    - 登录到你的 NAS 设备，打开「控制面板」。
    - 选择「终端机和 SNMP」选项，然后启用 SSH 功能，以便可以通过 SSH 客户端远程访问你的 NAS。

2. **准备 `docker-compose.yml` 文件**：
    - 创建一个名为 `docker-compose.yml` 的文件。
    - `ports`部分容器和宿主机之间的端口，用于 Web 界面访问和服务配置。
    - `volumes`部分则映射了数据存储位置，确保数据的持久化。
    - 将所需的部署配置代码粘贴进这个文件。确保代码正确无误，并根据需要调整服务设置。

3. **通过 SSH 连接到 NAS**：
    - 使用 SSH 客户端（如 PuTTY 或其他终端软件）连接到你的 NAS。
    - 根据提示输入用户名和密码进行登录。

4. **导航至 `docker-compose.yml` 文件所在目录**：
    - 执行命令 `cd /volume3/storage`（或你存放 `docker-compose.yml` 文件的具体路径）。

5. **执行 Docker Compose 命令**：
    - 在 `docker-compose.yml` 文件所在的目录下，执行命令 `sudo docker-compose up -d`。
    - 此命令会在后台启动并运行你的 Docker 容器。稍等片刻，等待部署过程完成。

6. **关闭 SSH 功能**（推荐）：
    - 为了系统安全，完成部署操作后，建议关闭 NAS 的 SSH 功能。
    - 返回到「控制面板」中的「终端机和 SNMP」选项，禁用 SSH 功能。

**注意**：

- 对于非 root 用户，执行 Docker 相关命令时需要在命令前添加 `sudo`，以避免遇到 `Permission denied` 的权限问题。
- 通过执行 `sudo -i` 命令，可以直接获得 root 用户的权限，便于管理和执行后续操作。

通过遵循以上步骤，你可以轻松在 NAS 上部署和管理 Docker 容器，无论是群晖 NAS 还是其他品牌的 NAS 系统。这一过程不仅提升了部署的效率，也使得容器化应用的管理变得更加灵活方便。

### Portainer 部署

如果你的 NAS 系统上已安装 [Portainer](./portainer.html)，可直接通过以下步骤使用 Portainer 部署 Docker 服务：

1. 在 Portainer 界面中依次选择 Stacks > Add stack。
2. 在 Web editor 中粘贴你的 `docker-compose.yml` 配置，然后点击 Deploy the stack 完成部署。

![](https://img.newzone.top/2024-03-21-05-57-36.png?imageMogr2/format/webp)

## 常见问题

### 路径对照

在配置 volumes 时，请特别注意本地存储路径的选择。例如，Emby 服务的电视剧路径配置可能为 `/volume1/tvshows:/data/tvshows`。这里，`/data/tvshows` 是 Docker 容器内部的固定路径，而 `/volume1/tvshows` 是你可根据实际情况自定义的 NAS 本地路径。

### 用户与组身份

UID 和 GID 分别代表用户身份和组身份标识。在启动 Docker 容器时，默认情况下，容器进程是以 root 用户（UID 0）运行。然而，从安全的角度出发，非 root 的运行模式会更加安全，因为这可以在容器受到攻击时，降低攻击者获取主机高权限的风险。在常规的设置中，UID 和 GID 通常被设置为 1000。但例如在群晖系统中，第一个用户的 UID 实际为 1026，而 GID 则为 100。

值得注意的是，当外部系统的用户标识与 NAS 上的 UID/GID 存在不匹配的情况时，可能会出现权限不一致的问题，进而影响到文件的正常访问权限。

文章中我默认提供的是群晖 UID/GID，非群晖系统可以都该为 1000。

### 文件夹访问权限

对于如 Emby 这类依赖外部存储资源的 Docker 服务，文件夹的访问权限是不可或缺的。一个直接的解决方案是将文件夹的权限设置为“Everyone”。然而，这样的做法在安全性上存在隐患。一旦有人获得 Docker 的操作权限，相关文件夹很可能会被擅自更改，这只能作为一个短期的权宜之计。

下图以 Emby 服务中的电视节目存储路径 `/volume1/tvshows` 为实例，为了确保正常运行，我们可以临时为该文件夹授权“Everyone”权限，但建议后续寻求更安全的权限管理策略。

![](https://img.newzone.top/2023-09-16-08-42-22.png?imageMogr2/format/webp)

## 编号规则

- 1-10：影视音乐类
- 11-20：娱乐阅读类
- 21-30：同步网盘
- 31-40：文档管理
- 41-70：空位
- 71-80：未分类（默认）
- 81-90: 自动化
- 91-100：导航
- 101+：后端

<!-- markdownlint-disable MD033 -->

<div class="catalog-display-container">
  <AutoCatalog base='/services/dockers-on-nas/' />
</div>

<!-- markdownlint-enable MD033 -->
