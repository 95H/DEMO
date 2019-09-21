let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./sli');
http.createServer((req, res) => {
    let {pathname,query} = url.parse(req.url, true);
   
    if (pathname === '/list') {
        res.setHeader('content-type','text/plain;charset=utf8');
       return res.end(JSON.stringify(sliders))
    }
    if(pathname==='/list'){
        // readF('./sli.json',(err,data)=>{res.end(data)
            readF('./sli.json',(err,data)=>{res.end(data)
        })
        return
    }
}).listen(5000)