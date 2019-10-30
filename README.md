# SPA - Blog

用 React 打造的 SPA Blog，裡面的文章都是自己學習 React 的筆記。

#### 👉 [DEMO](https://yakim-shu.github.io/SPA-Blog/)

![pic-article](https://i.imgur.com/KXitN8k.jpg)

### Feature
- 文章分類、標題搜尋
- 支持 markdown 格式發布文章，並支援 code highlight
- 操作文章會有回饋訊息，增加使用者體驗


### Tech
- react-router 處理前端路由
- 搭配 Redux 管理狀態，解決 props drilling 的問題
- 使用 redux-promise 處理非同步操作
- 文章 API 以 JSON Server 部署到 Digital Ocean、並使用 Nginx 作代理

### Installation

- Clone the repo
```sh
git clone https://github.com/yakim-shu/SPA-Blog.git
```
- Install packages
```sh
yarn
```
- Run project
```sh
yarn run start
```

### Todos

 - [ ] 權限管理
 - [ ] 文章留言版

