// 发布(依次执行)  订阅（预先规划好） 
// 定义发布、订阅的事件 
//emit 英文词义  发射  
// on 订阅的事件的函数
// emit 发布事假的函数 
// cbs 用来放on的多个事件回调 
//emit之后 让on 里面的回调执行 回调执行把参数（emit发送过来的数据）传进去
let fs = require('fs')
let event ={
    cbs:[],
    res:[],//用来存放每一次emit过来的数据
    on(fn){
       this.cbs.push(fn)  //把事件全都订阅后放在一个数组里
    },
    emit(data){
       this.res.push(data)
       this.cbs.forEach(fn=>fn(this.res))
    }
}
event.on(function(data){
    if(data.length===2){
        console.log(data)
        console.log('可以吃了') 
    }
   
})
event.on(function(){
    console.log('很好')
})
// 发布买豆浆和卖包子的事件 
fs.readFile('./1.txt','utf8',function(err,data){
   event.emit(data)
})
fs.readFile('./2.txt','utf8',function(err,data){
   event.emit(data)
})