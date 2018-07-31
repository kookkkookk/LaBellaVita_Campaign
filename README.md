# webpack for Vuejs template
- 使用vuejs跟vue-router
- 可以使用javascript es6
- 可以用gulp壓縮圖片
- 使用stylus & sass & scss 寫 css
- 除了可以寫html也可以寫pug(jade)

* 啟動使用 npm run dev
```
npm run dev

```
* 編譯使用 npm run deploy  or  webpack -p
```
npm run deploy

or

webpack -p
```

## 修改記錄

### 2017/7/4
 - 更新套件 webpack更新至3.0
 - 加入sass & scss的使用
 - 更新cdn所使用的版本

### 2017/2/1
 - 修改 html & pug 使用跟編譯出來的結果
 - 多個entry的使用，output改[name]
 - 使用gulp來壓縮圖片images-src -> images
 - gulp 壓縮 jpg 改成 imagemin-jpegtran
 - 增加 json 用 file-loader 搬檔
 - js es6 範例
 - js es6 this 導入 babel-plugin-transform-class-properties
 - vue 檔案加入 autoprefixer
 - vue-router 使用
 - output增加publicPath路徑
 - vue檔案裡面寫background-image路徑要用 ~

