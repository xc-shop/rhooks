# 说明

## 文档
使用`npm run docs:build`生成文档到`docs/pages/folder1/api.md`。

- 优点：
1. 强迫写详细的注释
2. 形成文档更加自动化

## 安装

```bash
npm i @jomsou/rhooks -S
or
yarn add @jomsou/rhooks -S
```

- 在原生js中使用

```html
<script src="xx/dist/index.aio.js"></script>
<script>
    const { 
      xxx,
      ...
    } = window['rhooks'];
<script>
```

- 在框架中使用

```js
import Jrferhooks from '@jomsou/rhooks';
const { xxx, ... } = Jrferhooks
or 
import { xxx } from '@jomsou/rhooks';
```