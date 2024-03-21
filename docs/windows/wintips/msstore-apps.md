---
title: Microsoft Store 应用开机启动
date: 2024-03-22
order: 1
---

在日常使用 Windows 系统时，我们可能希望特定的应用随系统启动自动运行，尤其是一些常用的 Microsoft Store 应用（UWP 应用）。然而，Windows Store 应用不像传统软件那样存放在文件系统中，而是安装在一个隔离环境里。每次更新后，其存储位置可能发生变化，使得不能简单通过创建快捷方式来实现自启动，这让直接设置开机启动显得较为复杂。

为解决这一问题，本文将介绍几种方法，帮助你实现 Microsoft Store 应用在电脑开机时自动启动。

## 通过任务栏固定应用启动

一种简便的解决方案是利用 Windows 的快捷键功能：

- 首先，右键点击你希望开机时启动的 Microsoft Store 应用图标，选择“固定到任务栏”。
- 然后，你可以通过 `Win+数字键` 快捷键来启动任务栏上的应用。数字键代表应用在任务栏上的位置。例如，如果应用被固定在任务栏的第七位，使用 `Win+7` 即可启动应用。

## 通过应用包家族名称启动

另一种更为稳定的方法是使用应用的 `PackageFamilyName` 来定位并启动 Microsoft Store 应用，这个值通常不会因为应用更新而改变。

### 查找和使用包家族名称

1. **打开 PowerShell**：在开始菜单中搜索“PowerShell”，右键选择“以管理员身份运行”。

2. **列出应用包**：在 PowerShell 中执行下列命令，列出你系统上所有已安装的应用包及其包家族名称：

    ```shell
    Get-AppxPackage | Select Name, PackageFamilyName
    ```

    ![](https://img.newzone.top/2024-03-22-02-44-23.png?imageMogr2/format/webp)

3. **确定应用的包家族名称**：从命令输出中找到你想要设置开机启动的应用的 `PackageFamilyName`。

4. **通过包家族名称启动应用**：使用以下命令格式启动应用：

    ```shell
    explorer shell:appsFolder\PackageFamilyName!App
    ```

    例如，要启动思源笔记，命令为：

    ```shell
    explorer shell:appsFolder\89C2A984.SiYuan_1qfd3tsw4ngc2!App
    ```

    如果执行后打开的只是资源管理器，并未激活对应应用，那么我们需要进一步指定应用 ID。

### 指定应用 ID

1. **查找应用 ID**：如果直接使用包家族名称未能启动应用，通过以下命令查找应用的 ID：

    ```shell
    Get-AppxPackage *SearchName* | Get-AppxPackageManifest | Select -ExpandProperty Package | Select -ExpandProperty Applications | Select -ExpandProperty Application | Select Id
    ```

    将 `*SearchName*` 替换为应用的关键字。例如，寻找思源笔记的命令为：

    ```shell
    Get-AppxPackage *siyuan* | Get-AppxPackageManifest | Select -ExpandProperty Package | Select -ExpandProperty Applications | Select -ExpandProperty Application | Select Id
    ```

    ![](https://img.newzone.top/2024-03-22-02-54-49.png?imageMogr2/format/webp)

2. **使用应用 ID 更新命令**：

    ```shell
    explorer shell:appsFolder\PackageFamilyName!AppID
    ```

    以思源笔记为例，完整命令为：

    ```shell
    explorer shell:appsFolder\89C2A984.SiYuan_1qfd3tsw4ngc2!SiYuan
    ```

## 使用脚本实现开机启动

为了使应用在开机时自动启动，可以通过编写脚本自动执行上述命令。这里提供一个 AutoHotkey 脚本示例：

```autohotkey
; 通过任务栏固定应用启动，调用热键 Win+7
Send, #7

; 通过应用包家族名称和应用ID启动，例如启动思源笔记
Run, explorer shell:appsFolder\89C2A984.SiYuan_1qfd3tsw4ngc2!SiYuan
```

请根据你的实际需求调整脚本。例如，如果你的应用固定在任务栏的其他位置，或者你需要启动的是另一个应用，相应地替换热键或应用的包家族名称和应用 ID。

为了让这个脚本在 Windows 启动时自动运行，需要将其添加到启动项中。有几种方法可以实现这一点，这里提供一种简单的方式：

- 按下 `Win+R` 打开运行对话框，输入 `shell:startup`，然后按回车。这会打开 Windows 的“启动”文件夹。
- 将你的 `.ahk` 脚本文件复制或移动到这个文件夹中。

完成以上步骤后，每次 Windows 启动时，AutoHotkey 会自动执行这个脚本，从而启动你指定的 Microsoft Store 应用。
