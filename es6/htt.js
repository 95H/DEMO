// Node.js 后端
let http = require('http'); 
//node的http模块 node自带的模块都有直接用 自带的服务器模块
let url = require('url');
// url 解析url路径和路径参数的  
// localhost:8080?name=1
http.createServer(function (req, res) {
    // createServer() Node创建服务器的方法函数
// req Request  请求
// res Response 响应 
// listen 函数 监听端口号 0-65535
// 端口号65535个
    // console.log(url.parse(req.url,true))
    // pathname 路径名
    // query 查询参数 ?name=1&&age=2
    // url.parse 解析路径参数的方法
    // 根据路径的不同 响应不同的数据
   let {pathname,query}= url.parse(req.url,true)
   res.setHeader('content-type','text/plain;charset=utf8');
//    res.setHeader 设置响应头
  if(pathname==='/login'){
      return res.end('登录')
  }
  if(pathname==='/sigin'){
      return res.end('注册')
  }
   // url.parse(req.url,true) 是一个有很多参数的对象 参数里面 固定的方法 解析参数的
// /signin?name=1&&age=7
    // let  pathname=(url.parse(req,url,true).pathname;
    // let  query=(url.parse(req,url,true).query;
//    console.log(query,pathname)
    // res.end('Hello World')
    res.end('not found')
    // res.end()响应回什么数据
}).listen(8081,()=>{
    console.log('8081启动成功')
})

