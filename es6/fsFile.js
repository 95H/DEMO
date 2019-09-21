// import fs from 'fs';
let fs=require('fs')
fs.readFile('./code.json','utf8',function(err,data){
    console.log(data)
})
fs.writeFile('./code.json',JSON.stringify({name:"lili"}),'utf8',function(err,data){
console.log(data)
})

function readF(url,cb){
    fs.readFile(url,'utf8',cb)
}
readF('./code.json',(err,data)=>{
   console.log(data,'读取文件')
})

function writeF(url,data,cb){
    fs.writeFile(url,JSON.stringify(data),'utf8',cb)
}
writeF('./code.json',{},(err,data)=>{
    console.log("name","huanhuan")
})
