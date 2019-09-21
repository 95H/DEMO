/**
 * ITCAST WEB
 * Created by zhousg on 2017/4/15.
 */
$.ajax({
   type:'',
   url:'',
   data:{},
   dataType:'',
   beforeSend:function(){

   },
   success:function(){

   },
   complete:function(){

   }
})



/*封装ajax工具函数*/

* 有哪一些不确定的点
* 确定的参数    类型      默认      参数具体值
* 1.请求方式    字符串    get       get,post
* 2.请求地址    字符串    当前地址   后台处理程序的地址（接口地址）
* 3.是否异步    布尔      true      true  false
* 4.发送数据    对象      {}        {name:'Echo',age:10}
* 5.成功回调    函数      -         响应成功的时候要做的事情  （需求来决定）
* 6.失败回调    函数      -  响应失败的时候要做的事情  （需求来决定）
*


 封装jQuery的ajax工具函数：
 1.jquery中的ajax属性的值就是个匿名函数
 2.在jquery的ajax函数中，一定要传入一个对象实参 在这个对象实参中定义一些属性来指定ajax发送请求和响应的数据

// 
     // $(function(){
        // $.ajax()
    //$是一个jquery里涵盖范围最大的一个对象，称之为全局对象
    //var a={name:'Huan'} a.name  var $={ajax:function(){}} 
    //eg:
    //$(function(){
    //console.log($.ajax)
    //})  
      // })


* 1.熟练掌握原生ajax
* 2.理解ajax封装原理
* 



// 全局变量
window.$ = {};
$.ajax()
$:{ajax:function(){}}
$.ajax()
var hahaha={name:"Echo",sayHi:function(){console.log("hello,my name is Echo!")}}
hahaha.sayHi()
// 给这个全局变量定义一个ajax属性  指向的是一个方法



// options  是一个可能有6个参数的对象
var options = {
 type:'请求方式',
 url:'请求地址',
 async:'是否异步',
 data:'发送数据',
 success:'成功回调函数',
 error:'失败回调函数'
 }
 $.ajax = function(options){
    // 判断options是否接收到了用户传入的实参如果接受到了，就证明用户传入了实参对象，就可以继续执行后续代码逻辑，如果未接收到，就证明用户没有传入实参，或者传入的实参不是一个对象类型，就可以结束代码了
    // 实现封装
    // 如果没有传options或者传了不是一个对象  终止代码执行
     if(!options || typeof options != 'object' ){
         return false;
         // 如果options没接收到实参，值是false
         // ！options的值是true
         // 就直接结束执行 return false
         // 用户传入了实参，options的值是true ！option的值是false
         // 用户如果传入的实参不是对象类型:那么后面的值就是true，就会进入if判断，就结束执行
     }
// 判断传入的实参是不是对象,如果不是对象或没有传，直接结束执行
    if(!options||typeof options!="object"){

    }

     参数的默认处理
    // 默认请求方式是get
    // 三元表达式：xxxxxx==xxx  ?  xxxx  :  xxxxx
     $.ajax({
         type:'post/get',
       url:'',
        async:true,
     })
     var type = options.type != 'post' ? 'get' : 'post';
    // URL地址为用户输入的地址，如果用户没有输入，就使用当前页面绝对路径
     var url = options.url || location.pathname;/*
     短路运算的或运算，如果第一个值是true，就取第一个值，
     如果第一个值为false就取第二个值，第一个值是用户输入的url地址，
     如果用户输入了，第一个值就是true，
     如果用户没有输入url地址，第一个值就是false，
     这样就会取第二个值（当前地址）
    3. url的默认值是当前地址，前端获取当前地址的方法是
     location.pathname
     当前页面的绝对路径*/
     设置异步属性，默认为异步 
    var async=options.async===false?false:true;
    // 如果用户传入的实参对象里定义了async属性，
     // 属性值为false，那么我们就让async为false，
     // 如果用户将async的值赋值为true或者就没有传入async属性，
     // 那么我们就默认async属性为true
     var async = options.async === false ? false : true;
    // 设置前端向后台传入的数据，如果前端向后台传入了数据，那么就让传入数据为前端输入的数据，否则默认传入空对象
    var data = options.data || {};
    // 默认请求方法是get，那么get方法中前端向后台传输的必要数据写在url
     {name:'huanhuan',age:'19',sex:'girl'}
     xxx.php?name='huanhuan'&age='19'&
     健 名
     4.for in遍历的语法格式：
       for(key in 要循环的对象名){
        代码逻辑
       }
    // 对象能网络传输？{name:'xm',age:10} ===>  name=xm&age=18
    {name:'xm',age:10} ===> +?    "name=xm&age=10"
    // 格式化成xhr能发送的数据
    // 把用户传进来的必要数据对象里的必要数据拿出来
    // 拼接成一个符合要求格式的字符串

    data:{}
   // var dataString="";
    //for(key in data){
        格式：key1=value1&key2=value2&key3=value3
        dataString=dataString+key+"="+data[key]+"&";
  平常获取格式：对象名.属性名
  为什么是--对象名[属性名]
  $(function(){
    var a={name:'echo',age:'19',sex:'girl',heightL:'160'}
    for(key in a){
        console.log(a.key)
        console.log(a[key])
    }
  })
  5.for in循环中，如果想要在循环体里拿到对象里的属性值，要通过对象名[key]的格式来获取，而不能用对象名.key的形式
      //     dataString += key+'='+data[key]+'&';
         dataString.slice(1,-1);
     }
    [1,2,3,4,6,7]
    sex
    var a={name:"Echo",age:19,sex:"girl"}
   key===>键名
   键名=键值&
    for(key in a){

    }
    var dataStr = '';
   // for in 遍历是依据对象中键值对的键名来进行遍历的。
    for(key in data){
    dataStr += key+'='+data[key]+'&';
    }
   // 多一个&符合  要去掉
    dataStr = dataStr && dataStr.slice(0,-1);
    if(dataStr){
        dataStr.slice(0,1)
    }

    // 发送请求前的回调函数：
    // 没有默认值也就是说不需要的时候可以不写
    // 如果用户输入了beforeSend这个属性，那么options.beforeSend值为true反之options.beforeSend值为false
  

 


    // 发送前回调函数
     if(options.beforeSend){
        var flag = options.beforeSend();
        // flag就是options.beforeSend这个匿名函数的调用
         if(flag === false){
             // 这时候就阻碍了ajax发送
            return false;
        }
    }

    // ajax编程
    var xhr = new XMLHttpRequest();
    /*请求行*/
     
    6.原生ajax方法中，建立前端和后台之间链接的方法叫做
      Open(type,url,async)
      Type:常用的两种  get post
          (1)get方法的前端向后台传输的必要数据拼接在url的后面,get方法的send属性传入的参数是null
          (2)post方法的前端向后台传输的必要数据写在send方法里面
    xhr.open(type,type=='get'?url+'?'+dataStr:url,async);
    /*请求头*/
    get方法不需要设置请求头，是默认的
    if(type == 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }
    /*请求主体 发送*/
    xhr.send(type=='post'?dataStr:null);

    /*响应*/
    xhr.onreadystatechange = function(){
        监听响应状态码（响应状态）

        /*通讯完成*/
        readyState响应状态码 xhr.readyState表示xhr对象的响应状态码
        if(xhr.readyState == 4){
            /*成功*/
            if(xhr.status == 200){
                state的响应状态值 200 304 403 404 500及以上
                /*拿到数据 转换格式*/
                /*后台能确定返回给前端的数据格式*/
                /*需要根据后台响应的类型来确定数据格式*/
                var contentType = xhr.getResponseHeader('Content-Type');
                /*规范的写法   application/xml */
                /*规范的写法   application/json */
                 var result;
                 //一般情况result表示后台响应回来的数据
                if(contentType.indexOf('xml') > -1){
                    // 判断里面有没有XML，没有返回-1
                    // 判断是否按照XML的格式解析
                    // 判断我们获取到的contentType是按照什么语法格式进行解析的
                    // 如果是按照xml格式进行解析的那么就把返回的数据转换成XML格式的数据
                    /*返回xml*/
                    result = xhr.responseXML;
                }else if(contentType.indexOf('json') > -1){
                    /*返回json*/
                    这个后台返回回来的数据是不是按照json格式进行解析的，如果是，就进入if条件判断里，xhr.responseXML
                    将返回回来的数据转换成XML格式的数据，JSON.parse(xhr.responseText)
                    将返回回来的数据转换成json格式的
                    result = JSON.parse(xhr.responseText);
                }else{
                    result = xhr.responseText;
                }
                /*去调用成功回调函数*/
                options.success && options.success(result);
            }
            /*失败*/
            else{
                /*去调用失败回调函数*/
                var message = {
                    status:xhr.status,
                //xhr的响应状态值
                    statusText:xhr.statusText 
                    //xhr的响应状态内容
                };
                options.error && options.error(message);
            }

            /*通讯完成回调函数*/
            options.complete && options.complete();

        }
    }
};

$.get = function(options){
    options.type = 'get';
    $.ajax(options);
}
$.post = function(options){
    options.type = 'post';
    $.ajax(options);
}

