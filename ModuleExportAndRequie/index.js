// tool export gi index require do
// var tool = require('./tool.js')
// console.log(tool)

//cac ham require co sa cua nodejs

//doc file
// var fs = require('fs')
// fs.readFile('./text.txt', function(err,data){
//  console.log(data.toString());
// })

//xu ly duong dan
//lay gia tri duong dan thu muc hien tai chua file
// console.log(__dirname)
//noi duong dan
var path = require ('path')
var duongDan = path.join(__dirname, 'index.js')
console.log(duongDan)




