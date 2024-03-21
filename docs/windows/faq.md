---
article: false
title: Windows 常见问题
icon: ask
order: 3
---

在使用 Windows 系统的过程中，我们经常会遇到各种问题，从简单的快捷键使用不熟悉到系统更新导致的意外重启，甚至在安装应用时出现权限限制。本文记录了我在 Windows 上经常碰到的问题和解决方案。

## 精选 Windows 快捷键

为了提高工作效率，熟练掌握以下 Windows 快捷键是非常有帮助的：

### 窗口管理

- **Win + 数字键**：启动任务栏的快捷方式。
- **Win + D**：显示桌面，再次按下恢复原状。
- **Win + E**：快速启动文件资源管理器。
- **Win + Tab**：查看当前所有打开的窗口和虚拟桌面。
- **Win + 向上/下/左/右键**：调整窗口位置和大小。

### 系统功能

- **Win + I**：打开系统设置。
- **Win + Ctrl + L**：实时字幕（仅限 Windows 11）。
- **Win + Ctrl + D**：创建新的虚拟桌面。
- **Win + Ctrl + 左/右**：切换虚拟桌面。

### 开发者工具

- **Ctrl + W**：关闭标签页。
- **Alt + F4**：关闭当前程序窗口。
- **Ctrl + Shift + C**：复制文件路径。

此外，`%AppData%` 是指向 `C:\Users\用户名\AppData\Roaming` 的变量路径，这在管理文件和设置时非常有用。^[[Windows 变量路径](https://blog.csdn.net/lijianbiao0/article/details/85118775)]

## 网址快捷方式创建

如果你需要从桌面快速访问特定的网页，可以通过以下步骤创建网址快捷方式：

1. 右键单击桌面，选择「新建」>「快捷方式」。
2. 输入浏览器的运行路径，后面加上空格和你希望访问的网址。例如：`"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" https://newzone.top/`。
3. 如果需要一次打开多个网址，继续在后面添加「空格 + 网址」。

## Chrome 开发工具技巧

在使用 Chrome 开发工具时，可能因为网页重定向而无法查看重定向页面。以下是几个有用的设置：

- **Preserve log**：保留网页刷新或重定向后的加载日志。
- **Disable cache**：禁用网页缓存，以确保每次加载都是最新的内容。
- **Throttling**：通过增加网络延时，查看网页的跳转路径。可在中转页面将网络设置为 Offline，使网页停止加载。

![](https://img.newzone.top/2024-03-22-03-57-18.png?imageMogr2/format/webp)

## 解决中英文无法切换的问题

当突然无法切换中英文时，这通常与硬件问题有关，而非输入法。可以通过以下步骤诊断和解决问题：

1. AutoHotkey 中选择「view」>「Key history and script info」，窗口会显示最近的按键历史，查找是否有按键在不断重复。
2. 尝试物理方式修复问题按键，如重复按压或断开键盘连接。一般问题多出在 shift、alt、ctrl 键，多按几次。
3. 如果问题依旧，考虑使用软键盘或通过软件如 Powertoys、AutoHotkey 禁用问题按键。

## 禁止系统自动更新重启

自动更新虽然可以保持系统安全性，但有时会在不便的时候重启电脑。以下是如何在不同版本的 Windows 中禁用自动重启的方法：

- **Windows 11**：在注册表中进入「计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU」，新建 DWORD（32 位）值，将其重命名为 `NoAutoRebootWithLoggedOnUsers`，并将键值改为 1。禁止有用户登录时自动重启。
- **Windows 10**：没有找到类似的注册表，建议通过系统设置关闭自动更新功能。

## 启用 WPS 宏功能

默认情况下，WPS 可能不支持 VBA 宏。可以通过以下步骤启用：

1. 安装 [WPS VBA 模块 V7.1 版本](https://www.52pojie.cn/thread-1178648-1-1.html)，以支持宏功能。
2. 在「选项」>「信任中心」中启用宏，并设置受信任的文档或文件夹。

另外，WPS 建议开启聚光灯效果。选择「视图」>「阅读模式」，每个文件需要单独开启，文件保存后自动开启。

## 解决无法安装应用的问题

当遇到 `您的安全设置不允许将此应用程序安装到您的计算机上` 的提示时，可以通过修改注册表解决。^[[Unable to Install ClickOnce Application due to Security Settings](https://superuser.com/questions/1252575/unable-to-install-clickonce-application-due-to-security-settings-windows-10)] 以下是步骤：

1. 新建一个记事本文件，输入特定代码来修改 .NETFramework 的安全设置。

    ```shell
    Windows Registry Editor Version 5.00
    [HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\.NETFramework\\Security\\TrustManager\\PromptingLevel]
    "MyComputer"="Enabled"
    "LocalIntranet"="Enabled"
    "Internet"="Enabled"
    "TrustedSites"="Enabled"
    "UntrustedSites"="Disabled"
    ```

2. 将记事本文件后缀名改为.reg，以管理员身份运行此文件，合并到注册表。

**注意**：修改注册表前应当备份，以防意外情况发生。

另外，当遇到更复杂的问题时，可以访问 [Microsoft 支持社区](https://answers.microsoft.com/zh-hans/) 寻求帮助。
