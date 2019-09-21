// 命名规范 
// node vue 不要和框架重名
// 开头不要数字 尽量使用英文
// 轮播图接口
// 请求方法:get
// 地址:/slider
// resulet:
//       msg:1 表示成功 2表示失败
//       data:[] Array
//       item: 轮播图的url
//       id:表示商品id
//       price:表示商品价格
// Node.js 后端
let http = require('http');
//node的http模块 node自带的模块都有直接用 自带的服务器模块
let url = require('url');
let s = require('./public');
// console.log(s);
// 文件处理模块
let fs=require('fs');
// console.log(fs);
// fs.writeFile 写文件
// fs.readFile 读文件
// 参数 文件路径 编码格式 回调(err,data) 在node里面 一般都是err first err放在前面

// url 解析url路径和路径参数的  
// localhost:8081?name=1
fs.readFile('sli.json', 'utf8', function () {

})
http.createServer((req, res) => {
    // createServer() Node创建服务器的方法函数
    // req Request  请求
    // res Response 响应 
    // listen 函数 监听端口号 0-65535
    // 端口号65535个
    // console.log(url.parse(req.url,true))
    // pathname 路径名
    // query 查询参数 ?name=1&&age=2
    // url.parse 解析路径参数的方法
    // pathname 路径 如果是根2路径 是/,其他路径是/加上路径的名字,所以我们可以根据路径的不同来响应不同的数据
    let {
        pathname,
        query
    } = url.parse(req.url, true)
    res.setHeader('content-type', 'text/plain;charset=utf8');
    //    res.setHeader 设置响应头
    // req.headers
    // req.method 请求方式 都是大写的 我们可以根据请求方式的不同来返回不同的数据
    // 请求方式有几种 GET POST DLETE PUT  OPTIONS{试探性的请求}
    if (pathname === '/login') {
        return res.end('登录')

    }
    if (pathname === '/sigin') {
        // if (req.method === 'POST') {
        //     // post put 等有请求体的请求处理方式
        //     // ajax({
        //     //     url:www.baidu.com/a,
        //     //     typr:'post',
        //     //     data:{
        //     //         id:"1",
        //     //         name:"lilei"
        //     //     }
        //     // })
        //     let str = '';
        //     // req.on 请求的时候data处理
        //     req.on('data', chunk => {
        //         str += chunk; //创造buffer对象
        //     })
        //     // 请求结束拿到的data
        //     req.on('end', () => {
        //         console.log(str)
        //     })
        //     return res.end('POST请求')
        // }
        if (req.method === 'GET') {
            return res.end('注册')
        } else {
            return res.end('注册成功')
        }
    }

    // url.parse(req.url,true) 是一个有很多参数的对象 参数里面 固定的方法 解析参数的
    // /signin?name=1&&age=7
    // let  pathname=(url.parse(req,url,true).pathname;
    // let  query=(url.parse(req,url,true).query;
    //    console.log(query,pathname)
    // res.end('Hello World')
    res.end('not found')
    // res.end()响应回什么数据
}).listen(8081, () => {
    console.log('8081启动成功')
})