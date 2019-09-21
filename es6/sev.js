let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./public');
http.createServer((req, res) => {
    let {pathname,query} = url.parse(req.url, true);
   
    if (pathname === '/sliders') {
        res.setHeader('content-type','text/plain;charset=utf8');
       return res.end(JSON.stringify(sliders))
    }
}).listen(5000)