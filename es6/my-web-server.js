let http = require('http')
let serv = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<marquee>huanhuanlaile</marquee>'+'<h1>shazizimo</h1>')
})
serv.listen(3000)