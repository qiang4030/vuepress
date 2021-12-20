# 快速上手

::: warning 前提条件
VuePress 需要 [Node.js](https://nodejs.org/en/)>= 8.6
:::

本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

1.创建并进入一个新目录

```sh
mkdir vuepress-starter && cd vuepress-starter
```

2.使用你喜欢的包管理器进行初始化

```sh
yarn init # npm init
```

3.将 VuePress 安装为本地依赖

我们已经不在推荐全局安装 VuePress

```sh
yarn add -D vuepress # npm install -D vuepress
```

::: warning 注意
如果你的现有项目依赖了 webpack 3.x，我们推荐使用 [Yarn](https://yarn.bootcss.com/docs/getting-started/)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。
:::

4.创建你的第一篇文档

```sh
mkdir docs && echo '# Hello VuePress' > dosc/README.md
```

5.在`package.json`中添加一些 scripts

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

6.在本地启动服务器

```sh
yarn docs:dev # npm run docs:dev
```