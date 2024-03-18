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

[scrcpy](https://github.com/Genymobile/scrcpy) 是一款开源免费的投屏软件，支持在 Windows、macOS、和 GNU/Linux 上运行，不仅能够将安卓设备的屏幕实时显示在电脑上，还支持鼠标和键盘操作，甚至可以进行屏幕录制和摄像头使用。市面上主流的多屏协同软件大多都是基于 scrcpy 开发的套壳产品，而且 bug 也没有得到修复，因此建议直接使用官方的 scrcpy。

本文将以 scrpy 在 Windows 上的应用为例，介绍如何实现无线投屏、视频录制、直播以及与电脑的互控。

## 快速入门

### 准备工作

- **下载 scrcpy**：访问 [scrcpy 发布页](https://github.com/Genymobile/scrcpy/releases) 下载最新版本的压缩包，或通过 [国内搬运链接](https://wwz.lanzouq.com/ivPYD1qcs29e) 获取，之后解压到任意位置。

- **开启手机的「开发者选项」和「USB 调试」**：通常在手机的「设置/系统」>「关于手机」中，连续点击版本号 7 次，然后返回，你会在设置菜单底部找到开发者选项，请在其中启用「USB 调试」。

### 有线投屏

1. **连接设备**：利用 USB 数据线，将手机与电脑连接。确保在手机上启用了 USB 调试选项。
2. **启动 scrcpy**：定位到你已解压的 scrcpy 文件夹，并双击 `scrcpy.exe` 文件启动投屏应用。

成功启动后，你的手机屏幕将实时映射到电脑屏幕上，允许你通过电脑的键盘和鼠标来控制手机。目前，scrcpy 已经支持英文及主流中文输入法。如果在文字输入时遇到问题，建议尝试复制和粘贴文本。

**附加操作**：如果你希望在手机屏幕关闭的情况下继续使用投屏功能请按以下步骤操作：当手机屏幕亮起并解锁后，连接至电脑，然后运行 `.\scrcpy --turn-screen-off` 命令。这样可以关闭手机屏幕而保持投屏活动。

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
# 当显示 `cannot connect` 的超时报错，则关闭设备的 WIFI 然后重新开启。
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

# 以 H.265（质量更好）捕获屏幕，限制尺寸为 1920，限制帧速率为 60f ps，禁用音频，并通过模拟物理键盘控制设备：
.\scrcpy --video-codec=h265 --max-size=1920 --max-fps=60 --no-audio --keyboard=uhid
```

![](https://img.newzone.top/20190829093407.png "scrcpy 命令行截图")

## 进阶功能

### 屏幕录制

使用 scrcpy，你可以在将手机屏幕投射到电脑的同时，录制手机屏幕上的活动，并将其保存为视频文件。

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

Android 12 及以上的用户可以借助 scrcpy 直接将手机的摄像头画面投射到电脑上，使手机成为一个便携的高质量摄像头，非常适合直播和远程会议。

- **检测可用摄像头**：列出所有可用的摄像头及支持的分辨率和帧率，以便选择最适合你需求的设置。

  ```shell
  .\scrcpy --list-cameras
  .\scrcpy --list-camera-sizes
  ```

- **捕获相机画面**：`.\scrcpy --video-source=camera` 画面将使用后置摄像头，同时捕获音频。如需关闭音频，添加 `--no-audio` 参数。

- **画面帧率**：默认情况下，相机以 Android 的默认帧速率 (30 fps) 进行拍摄。使用 `--camera-fps=60` 参数可将其调整为 60 帧。

- **高速拍摄模式**：需先使用上方的 `--list-camera-sizes` 来获取摄像头的有效尺寸和帧速率。

  ```shell
  .\scrcpy --video-source=camera --camera-size=1920x1080 --camera-fps=240
  ```

- **视频录制**：将设备摄像头以 1920x1080 的 H.265（和麦克风）录制到 MP4 文件

  ```shell
  .\scrcpy --video-source=camera --video-codec=h265 --camera-size=1920x1080 --record=file.mp4

  # 捕获音频，但不播放
  .\scrcpy --video-source=camera --video-codec=h265 --camera-size=1920x1080 --no-audio-playback --record=file.mp4
  ```

- **直播采集**：我经常用 scrcpy 将手机摄像头变为直播视频源。通常，我会设置摄像头的分辨率为 1920x1080，关闭音频功能，并通过 `--orientation` 参数来调整视频的方向。

  ```shell
  # 横屏模式
  .\scrcpy --video-source=camera --camera-size=1920x1080 --no-audio
  .\scrcpy --video-source=camera --camera-size=1920x1080 --no-audio-playback

  # 竖屏模式
  .\scrcpy --video-source=camera --camera-size=1920x1080 --no-audio --orientation=90
  ```

更多设置方法参考 [scrcpy camera 文档](https://github.com/Genymobile/scrcpy/blob/master/doc/camera.md)。

## 常见问题

在使用 scrcpy 时，大部分报错和问题都是因为连接出错而导致的。因此，如果你遇到任何困扰而又不确定问题所在，强烈建议你首先对下方的连接设置进行核对。

### 核对连接设置

- **原装数据线**：若遇到连接问题，首先确保使用的是原装数据线。低质量的数据线可能导致连接不稳定，或出现 `error: no devices/emulators found` 报错。

- **直连 USB 端口**：尝试更换电脑上的 USB 端口，优先直连电脑端口而非使用 USB 集线器，特别是遇到 `Device disconnected` 报错时。

- **IP 地址核对**：确保手机的本机 IP 地址设置正确，并且手机与电脑位于同一 WiFi 网络下。

- **USB 调试开启**：请检查手机的「开发者选项」中是否已启用「USB 调试」。

### 报错及其解决方法

- **ADB 设备未找到**：如果出现 `ERROR: Could not find any ADB device` 报错，可能是因为缺少相应的 USB 驱动。请访问 [OEM 驱动程序链接](https://developer.android.com/studio/run/oem-usb?hl=zh-cn#Drivers) 下载适合你手机品牌的驱动程序。如果列表中没有你的手机品牌，请前往手机官网查找。例如，vivo 的驱动是 [vivo_usb_driver.exe](http://zs.vivo.com.cn/download.php?sel_type=2)；小米则需要下载 [小米解锁工具包](http://www.miui.com/unlock/download.html)，里面包含官方驱动安装程序 MiUsbDriver.exe。

- **无法连接**：若出现连接超时的问题，如 `cannot connect (10060)`，请检查设备的 IP 地址，确保手机和电脑处于同一网络。如果仍有问题，尝试重新启动手机的 WiFi 并再次尝试连接。或使用使用 `ping 192.168.2.204` 命令来检测连接是否正常。如果问题依旧存在，可以参考 [ADB: unable to connect](https://stackoverflow.com/questions/33462720/adb-unable-to-connect-to-192-168-1-105555) 进行更多调整。

- **异常报错**：报错 `ERROR: Exception on thread Thread[main,5,main]` 通常是因为手机不兼容 scrcpy 默认的分辨率设置。尝试使用不同的分辨率设置启动 scrcpy，例如 `.\scrcpy -m 1024`。

### 音视频质量调整

- **无声音输出**：Android 11 及以上版本支持音频投屏。如果未输出声音，尝试更换音频解码方式，例如 `.\scrcpy --audio-codec=aac`。

- **投屏模糊**：若投屏画质不清晰，可能是因为屏幕缩放设置。为解决此问题，请右键单击 scrcpy.exe，选择「属性」>「兼容性」>「更改高 DPI 设置」，并勾选「替代高 DPI 缩放行为」选项。应用此设置后，投屏效果即可恢复正常。

  ![](https://img.newzone.top/20190829095640.png "解决 scrcpy 投屏模糊")

### 特定品牌注意事项

- **小米手机**：小米手机用户可能需要进入「我的设备」>「全部参数与信息」，然后连续点击多次「OS 版本」，随后返回到「设置」>「更多设置」，才能进入开发者模式。在开发者选项中，需要同时启用 `USB 调试` 和 `USB 调试 (安全设置)`，然后重新启动手机，才能使用 scrcpy 进行投屏。否则，scrcpy 将出现各种报错命令，并无法正常进行投屏操作。

- **华为设备**：在华为/荣耀设备上，当切换到无线投屏时，拔掉数据线会导致系统关闭 USB 调试，从而终止投屏。解决方案来自 @残荷听雨：「进工程模式，把 usb 调成开发模式，先打开“在充电模式下允许 ADB 调试”，再打开 usb 调试。这样操作后，再拔掉数据线，它就不会自动关闭 usb 调试了。副作用是，“在充电模式下允许 ADB 调试”会自动常开，在网吧等公共区域，仅用数据线充电时就需要手动关掉 usb 调试，防止被黑。」

如果遇到的问题未在上述列表中或需要进一步的帮助，请参考 [scrcpy 官方 FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md)。
