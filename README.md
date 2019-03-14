
<center>
<br />
<br />
<br />
<img src="https://raw.githubusercontent.com/JofunLiang/usuallyjs/dev/logo.png" alt="usuallyjs"/>
<br />
<br />
<br />
<a href="https://www.npmjs.com/package/usuallyjs">
  <img src="https://img.shields.io/npm/v/usuallyjs.svg" alt="npm"/>
</a>
<a href="https://github.com/JofunLiang/usuallyjs/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/jofunliang/usuallyjs.svg" alt="license"/>
</a>
<a href="https://www.npmjs.com/package/usuallyjs">
  <img src="https://img.shields.io/npm/dm/usuallyjs.svg" alt="downloads"/>
</a>
<a href="https://github.com/JofunLiang/usuallyjs/blob/master/dist/usually.min.js">
  <img src="https://img.shields.io/github/size/jofunliang/usuallyjs/dist/usually.min.js.svg?label=minified%20size" alt="GitHub file size in bytes"/>
</a>
<br />
<a href="https://jofunliang.github.io/usuallyjs/">
  <img src="https://img.shields.io/badge/docs-%E6%96%87%E6%A1%A3-brightgreen.svg" alt="文档"/>
</a>
<br />
<br />
一个面向现代 Web 开发的 JavaScript 函数库。
<br />
<br />
<a href="https://github.com/JofunLiang/usuallyjs">
  <img src="https://img.shields.io/github/forks/jofunliang/usuallyjs.svg?style=social" alt="GitHub forks"/>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://jofunliang.github.io/usuallyjs/">
  <img src="https://img.shields.io/github/stars/jofunliang/usuallyjs.svg?style=social" alt="GitHub stars"/>
</a>
</center>


# 简介

usuallyjs 基于 ES6 开发，抛弃了传统 Web 开发中 DOM 和 BOM 操作部分的内容，精选了一系列 Web 开发过程中最常用的、最实用的 JavaScript 函数。与 Vue、React、Angular等现代 Web 框架搭配使用，更好的服务于开发现代 Web 应用。


# 版本历史/更改日志

<details>
<summary>v2.2.0</summary><br />
1、更新时间：2019-03-12<br />

2、更新内容：<br />

（1）、优化 isInt 函数<br />
（2）、新增 mapObject 函数<br />
</details>
<br />

<details>
<summary>v2.1.0</summary><br />
1、更新时间：2019-03-09<br />

2、更新内容：<br />

（1）、修复2.0.0版本引入问题<br />
（2）、不再支持IE9浏览器<br />
</details>
<br />
<details>
<summary>v2.0.0</summary><br />
1、更新时间：2019-03-08<br />

2、更新内容：<br />

（1）、默认使用ES6模块语法引入的是未经编译的源码<br />
</details>
<br />
<details>
<summary>v1.1.4</summary><br />
1、更新时间：2019-02-20<br />

2、更新内容：<br />

（1）、新增 spreadDate 函数<br />
</details>
<br />
<details>
<summary>v1.0.4</summary><br />
1、更新时间：2019-01-28<br />

2、更新内容：<br />

（1）、添加贡献指南<br />
（2）、完善配置项，如：生成文档自启动浏览器
</details>
<br />
<details>
<summary>v1.0.3</summary><br />
1、更新时间：2019-01-24<br />

2、更新内容：<br />

（1）、优化 random 函数<br />
  
（2）、优化 repeatItems 函数
</details>
<br />
<details>
<summary>v1.0.0</summary><br />
1、更新时间：2019-01-20
</details>

# 安装和使用

### npm安装和使用

通过 npm 使用如下命令安装：
```
npm install --save-dev usuallyjs
```

通过 es6 模块引用：
```javascript
import U from 'usuallyjs'
```

通过 node 模块引用：
```javascript
const U = require('usuallyjs')
```

### 浏览器安装和使用

下载本存储库，在页面中通过 script 标签引入 dist 文件夹下的 usually.js 文件即可，建议使用压缩版本 usually.min.js。通过命名空间 U 调用相关的函数。
如：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>usually浏览器安装和使用示例</title>
    <script src="dist/usually.js"></script>
  </head>
  <body>
    <script>
      var a = U.random()
    </script>
  </body>
</html>
```

# 浏览器兼容

支持 IE10+ 和现代浏览器

# 贡献

在提出拉取请求之前，请务必阅读[贡献指南](https://github.com/JofunLiang/usuallyjs/blob/master/CONTRIBUTING.md)。

# LICENSE

MIT
