# webpack quickstarter

有时你希望快速验证一个想法，需要 js/css/html，但有不需要@vue/cli 或 create-react-app 这样"重量级"的启动项目。
但如果仅仅是原始的 JS/HTML，不管是特性上，热加载，npm packages 等等都会挺繁琐。

这时就需要创建一个快速启动项目，包含以下功能：

1. 配置简单。避免加入任何不需要的功能影响性能或迁移；理解起来简单。
1. 热加载和自动刷新。
1. source map.
1. ES modules
1. 文件列表：

```
   ├── [.gitignore]
   ├── dist
   │   └── index.html
   ├── README.md
   ├── [jsconfig.json]
   ├── package.json
   ├── src
   │   ├── [global.d.ts]
   │   ├── [index.css]
   │   ├── index.html
   │   └── index.js
   ├── [webpack.config.js]
   └── yarn.lock
```

5. 可以从 github branch 快速创建项目。
1. 提供并指明可扩展的地方
   1. webpack.config.js
   1. babel.config.js

# 使用步骤

1. git clone https://github.com/zjlovezj/webpack-quickstarter testjs
1. yarn
1. yarn start:dev

# 未来可能去做的事情

1. TS 版本？
1. 添加 CSS 支持。(import css file; webpack.config.js; style-loader/css-loader)
1. 添加图片支持。file-loader

# references

https://auth0.com/blog/zero-config-javascript-app-prototyping-with-webpack
