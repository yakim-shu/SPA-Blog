（ 有更動的檔案幾乎都在 `pages/` 資料夾底下 ）

請下載後 `npm run dev`

以下我把遇到的疑問、以及如何解決的過程紀錄在這裡：

### Q: next 沒有入口的問題

以往在 React 裡面會有一個入口點，在那裡把 Redux store 用 Provider 傳進去，但看到 next.js 的 router 是直接以檔案放在 `pages/` 資料夾底下，一時之間不知道如何對應，後來才看到有 `_app.js` 跟 `document.js` 可以做全局設定。

### Q: redux 的問題

這部分應該算是最大的問題，如何將 redux 跟 next 結合，最後是直接照著官網範例：[with-redux](https://github.com/zeit/next.js/tree/canary/examples/with-redux)，直接用裡面的 [withRedux](https://github.com/zeit/next.js/blob/canary/examples/with-redux/lib/redux.js) 檔案複製下來修改。

### Q: redux action 不知道是否完成的問題（暫時改用直接 call API）

首頁的這支 API：https://blog-api.yakim.tw/posts/?_sort=id&_order=asc&_limit=5，改成 Server 發送後 action 會不知道是否完成，所以就不是以發送 action 的方式，而是直接 call API。

```javascript
IndexPage.getInitialProps = async () => {
 const res = await getLimitPosts();
 const json = res.data;

 return {
  ssrPostList: json
 }
}
```


### Q: 引入 SCSS 的問題 

SCSS & CSS 沒有辦法直接引入挺麻煩的，還要再新增個 `next.config.js`
