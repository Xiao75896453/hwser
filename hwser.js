#!/usr/bin/env node

// Step 1 and step 2 code goes here
//載入 `express`
 const express = require('express')
// // 建立一個 express (也就是網頁伺服器)實體
 const app = express()
 const port = 11344

// 啟動伺服器
 app.listen(port, () => {
 console.log(`listening on port: ${port}`)
 })

// Step 3 code goes here
 app.use(express.static(`${__dirname}/dist`))

// 載入 `body-parser`
 const bodyParser = require('body-parser')

// 設定 `body-parser`
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())

 app.post('/step7', (req, res) => {
// `bady-parser` 將解析好的資料存放在 `req.body`
 res.send(`<h1>Hello, ${req.body.fname} ${req.body.lname}</h1>`)
 })

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('students.sample.json');  
let student = JSON.parse(rawdata);  
console.log(student); 
