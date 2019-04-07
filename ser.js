#!/usr/bin/env node

// Step 1 and step 2 code goes here
/* Step 1:
 *  * edit [port] to an appropriate value
 *   * storing config to variables is a good practice, see `port` in the code
 *    * learn the syntax of string interpolation in js, see `${port}` in the code
 *     * 將 [port] 修改成合適的值
 *      * 將設定放在變數中是一種好習慣，參考程式中的 `port`
 *       * 學習 js 的 string interpolation 語法，參考程式中的 `${port}`
 *        */

//載入 `express`
 const express = require('express')
// // 建立一個 express (也就是網頁伺服器)實體
 const app = express()
 const port = 11346

// 處理 `/step1` 網址
 app.get('/step1', (req, res) => {
// 回應瀏覽器
 res.send('<h1>hello world</h1>')
 })

// 啟動伺服器
 app.listen(port, () => {
 console.log(`listening on port: ${port}`)
 })

// Step 3 code goes here
app.use(express.static(`${__dirname}/dist`))
/* Step 4:
 *  * open `[host]:[port]/step4` in a browser multiple times to see the result
 *   * try re-execute the program and see the result
 *    * learn the syntax of string interpolation in js, see `${++nRequests}` in the code
 *     * 用瀏覽器打開 `[host]:[port]/step4` 多次看結果
 *      * 試著重新執行程式並觀察結果
 *       * 學習 js 的 string interpolation 語法，參考程式中的 `${++nRequests}`
 *        */
  let nRequests = 0
  app.get('/step4', (req, res) => {
      res.send(`this is request #${++nRequests}`)
  })
// Step 5 code goes here
/* Step 5:
 *  * user input is stored in the first argument of the callback function, aka `req` in the code
 *   * open `[host]:[port]/step5?fname=[fname]&lname=[lname]` in a browser to see the result
 *    * try edit [fname] and [lname]
 *     * notice the syntax of `?` and `&` in the url
 *      * 使用者輸入存放在回呼函式的第一個參數，也就是程式中的 `req` 裡
 *       * 用瀏覽器打開 `[host]:[port]/step5?fname=[fname]&lname=[lname]` 看結果
 *        * 試著修改 [fname] 與 [lanme]
 *         * 注意網址中 `?` 與 `&` 的用法
 *          */
app.get('/step5', (req, res) => {
    res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})

// Step 7 code goes here
/* Step 7:
 *  * edit [property name]s to appropriate values
 *   * google `express body-parser` for more
 *    * notice `app.post()` is used instead of `app.get()`
 *     * server can return different results for get and post requests of the same url
 *      * 將 [property name] 修改成合適的值
 *       * 搜尋 `express body-parser` 了解更多
 *        * 注意這裡用的是 `app.post()` 而非 `app.get()`
 *         * 伺服器可以依 get 或是 post，針對同樣網址回傳不同結果
 *          */

// include `body-parser`
// // 載入 `body-parser`
 const bodyParser = require('body-parser')
//
// // setup `body-parser`
// // 設定 `body-parser`
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
//
 app.post('/step7', (req, res) => {
//  `bady-parser` stores parsed data in `req.body`
//     // `bady-parser` 將解析好的資料存放在 `req.body`
       res.send(`<h1>Hello, ${req.body.fname} ${req.body.lname}</h1>`)
       })

