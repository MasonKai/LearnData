---
title: 一键变身高效办公神器：如何用 scrcpy 免费实现手机电脑投屏互控
date: 2019-08-26
category:
  - 工具
tag:
  - scrcpy
  - 投屏
star: true
order: -26
---

[scrcpy](https://github.com/Genymobile/scrcpy) 是一款免费开源的投屏软件，支持在 Windows、macOS、和 GNU/Linux 上运行，不仅能够将安卓设备的屏幕实时显示在电脑上，还支持鼠标和键盘操作，甚至可以进行屏幕录制和摄像头使用。市面上主流的多屏协同软件大多都是基于 scrcpy 开发的套壳产品，而且 bug 也没有得到修复，因此建议直接使用官方的 scrcpy。

本文将以 Windows 系统为例，介绍如何快速开始使用 scrcpy 进行有线和无线投屏。下载可以前往官方站点 [scrcpy-win64-v2.4.zip](https://github.com/Genymobile/scrcpy/releases/download/v2.4/scrcpy-win64-v2.4.zip)，或者使用 [国内搬运链接](https://wwz.lanzouq.com/ivPYD1qcs29e)。

## 快速入门

### 准备工作

1. **下载 scrcpy：** 访问 [scrcpy 发布页](https://github.com/Genymobile/scrcpy/releases) 下载最新版本的压缩包，然后解压。

2. **开启手机的「开发者选项」和「USB 调试」：** 通常在手机的「设置/系统」>「关于手机」中，连续点击版本号 7 次，然后返回，你会在设置菜单底部找到开发者选项，请在其中启用「USB 调试」。

### 有线投屏

1. 使用 USB 数据线将手机连接至电脑，并在手机上允许 USB 调试。
2. 打开解压后的 scrcpy 文件夹，双击 `scrcpy.exe` 启动投屏。

若需在手机黑屏时继续投屏，请按以下步骤操作：当手机屏幕亮起并解锁后，连接至电脑，然后输入命令 `.\scrcpy --turn-screen-off`。此操作会关闭手机屏幕，但投屏功能继续正常运行。

### 无线投屏

完成有线投屏的步骤后，在电脑上打开命令行工具（如 PowerShell），按序执行以下操作命令。无线投屏前，请确保电脑和手机处于**同一 WiFi 网络**下。

```shell
# a.将命令目录切换到 scrcpy 文件夹。如果使用的是 Windows 11，在 scrcpy 文件夹中右键点击「在终端中打开」，会自动切换到当前路径。
cd D:\Libraries\Desktop\scrcpy-win64-v2.4
​
# b.在手机端开启「开发者选项」和「USB 调试」，然后使用数据线将手机和电脑连接，并允许 USB 调试，开启手机端口。
.\adb tcpip 5555

# 如果本行显示 no device 或未启动 adb，需检查「USB 调试」是否开启，或更换数据线。
# 此外，一些手机需选择「文件传输」模式方能使用 adb。
​
# c.拔出手机数据线，开始无线投屏。(192.168.2.20 为手机端的 WIFI 局域网 ip，需更改)
.\adb connect 192.168.2.20:5555
​
# d.启动 scrcpy.exe
.\scrcpy

# 如果出现错误或延迟较大，可以指定低分辨率投屏。
.\scrcpy -m 1024
# 连接多个设备会出现报错 `failed to get feature set: more than one device/emulator`，此时需要指定连接 tcpip 设备。
.\scrcpy -e -m 1024
# 简化操作：合并步骤 c 和 d，保持屏幕常亮，指定 1024 分辨率。
.\scrcpy --tcpip=192.168.2.20 -w -m 1024

# 以H.265（质量更好）捕获屏幕，限制尺寸为1920，限制帧速率为60fps，禁用音频，并通过模拟物理键盘控制设备：
.\scrcpy --video-codec=h265 --max-size=1920 --max-fps=60 --no-audio --keyboard=uhid
```

![](https://img.newzone.top/20190829093407.png "scrcpy 命令行截图")

## 进阶功能

### 屏幕录制

如果想在投屏的同时，对手机屏幕进行录制，可以输入下方命令进行操作。

```shell
# 将命令目录切换到 scrcpy 文件夹。
cd D:\Libraries\Desktop\scrcpy-win64-v2.4
​
# 开始录制，录屏文件会自动保存在当前文件夹内，文件名为指定的文件名。
.\scrcpy -r filename.mp4
​
# 关闭投屏窗口后，自动停止录屏并将视频保存在相应的目录中。
```

### 手机当摄像头

Android 12 及以上版本支持使用 scrcpy 将手机摄像头投屏至电脑。更多设置方法参考 [scrcpy camera 文档](https://github.com/Genymobile/scrcpy/blob/master/doc/camera.md)。

```shell
#列出可用的相机（及摄像头的有效尺寸和帧速率）
.\scrcpy --list-cameras
.\scrcpy --list-camera-sizes

#捕获相机（默认为后置摄像头，同时捕获音频）。如需禁用音频，则添加 `--no-audio`
.\scrcpy --video-source=camera

#默认情况下，相机以 Android 的默认帧速率 (30 fps) 进行拍摄
.\scrcpy --video-source=camera --camera-fps=60

#将设备摄像头以 1920x1080 的 H.265（和麦克风）录制到 MP4 文件
.\scrcpy --video-source=camera --video-codec=h265 --camera-size=1920x1080 --record=file.mp4

#使用高速拍摄模式来形成视频，参数来自 `--list-camera-sizes`
.\scrcpy --video-source=camera --camera-size=1920x1080 --camera-fps=240
```

## 常见问题

### 错误检查

遇到错误时，请检查以下四种情况，这可以帮助解决大约 90% 的问题：

- 使用**原装数据线**替换当前数据线。
- 尝试更换 USB 端口，避免使用 USB 扩展端口，因为电力不足的 USB 端口可能会导致 `Device disconnected` 报错。
- 确认手机的**本机 IP** 设置是否正确。
- 仔细核对有线连接的步骤：先开启 USB 调试，然后连接手机与电脑，最后启动 scrcpy。

### Could not find any ADB device

如果出现 `ERROR: Could not find any ADB device` 报错意味着你的手机未被电脑识别。可能是因为电脑上缺少相应的 USB 驱动程序。你可以点击此 [OEM 驱动程序链接](https://developer.android.com/studio/run/oem-usb?hl=zh-cn#Drivers) 进行下载。如果列表中没有你的手机品牌，请前往手机官网查找。例如，vivo 的驱动是 [vivo_usb_driver.exe](http://zs.vivo.com.cn/download.php?sel_type=2)；小米则需要下载[小米解锁工具包](http://www.miui.com/unlock/download.html)，里面包含官方驱动安装程序 MiUsbDriver.exe。

### ERROR: Exception on thread

报错 `ERROR: Exception on thread Thread[main,5,main]`，通常是因为手机不兼容 scrcpy 默认的分辨率设置。解决方法是，修改 scrcpy 启动代码，使用较低的分辨率。

```shell
# 三个分辨率设置，任选其一。
.\scrcpy -m 1920
.\scrcpy -m 1024
.\scrcpy -m 800
```

### 小米投屏设置

小米手机的投屏设置与其他手机不同。你需要进入「我的设备」>「全部参数与信息」，然后连续点击多次「OS 版本」，随后返回到「设置」>「更多设置」，才能进入开发者模式。

在开发者选项中，需要同时启用 `USB 调试` 和 `USB 调试 (安全设置)`，然后重新启动手机，才能使用 scrcpy 进行投屏。否则，scrcpy 将出现各种报错命令，并无法正常进行投屏操作。

### 华为投屏断开

在华为/荣耀设备上，当切换到无线投屏时，拔掉数据线会导致系统关闭 USB 调试，从而终止投屏。

解决方案来自 @残荷听雨：「进工程模式，把 usb 调成开发模式，先打开“在充电模式下允许 ADB 调试”，再打开 usb 调试。这样操作后，再拔掉数据线，它就不会自动关闭 usb 调试了。副作用是，“在充电模式下允许 ADB 调试”会自动常开，在网吧等公共区域，仅用数据线充电时就需要手动关掉 usb 调试，防止被黑。」

### 投屏没声音

Android 11 及以上版本支持将音频投屏至电脑。若你的系统版本已满足此要求，但仍未输出声音，建议更换音频解码方式尝试。

```shell
.\scrcpy --audio-codec=opus  # default
.\scrcpy --audio-codec=aac
.\scrcpy --audio-codec=raw
```

### 输入法问题

英文输入法及主流中文输入法均可正常使用。如中文输入出现问题，建议复制后再粘贴。

### 投屏模糊

如果屏幕设置了缩放比例，可能导致投屏界面模糊。为解决此问题，请右键单击 scrcpy.exe，选择「属性」>「兼容性」>「更改高 DPI 设置」，并勾选「替代高 DPI 缩放行为」选项。应用此设置后，投屏效果即可恢复正常。

![](https://img.newzone.top/20190829095640.png "解决 scrcpy 投屏模糊")

如遇其他问题或错误，请参考 [scrcpy 常见问题解答](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md)。
