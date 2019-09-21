//  1、name=value:设置cookie的名字，必须要写的内容
//	2、[;expires=date]:可写可不写，过期时间的设置
//	3、[;path=path-to-resource]:cookie限定的路径
//	4、[;domain=域名]:cookie限定的域名
//	5、[;secure]:协议，限定是否是https协议

//设置cookie的依据：
//			document.cookie = cookiestr;
//			var cookiestr  = “name=value[;expires=date]
//			[;path=path-to-resource][;domain=域名][;secure]”
//name = value 
function setcookie(a) {
	var cookiestr = encodeURIComponent(a.name) + "=" + encodeURIComponent(a.value);

	if (a.expires) {
		cookiestr += ";expires=" + a.expires;
	}
	if (a.path) {
		cookiestr += ";path=" + a.path;
	}
	if (a.domain) {
		cookiestr += ";domain=" + a.domain;
	}
	if (a.secure) {
		cookiestr += ";secure";
	}
	document.cookie = cookiestr;
}
//setSeconds() 设置时间的方法，是new Date()里面的方法，参数是毫秒

//删除cookie值
function removecookie(a) {
	var date = new Date();
	date.setSeconds(-1);
	setcookie({
		name: a.name,
		value: a.value,
		expires: date,
		domain: a.domain,
		path: a.path,
		secure: a.secure
	});
}


//查询内容的值
//name = value 
//储存的是name,value 
function getcookie(cname) {
	var strcookie = document.cookie;
	var cookies = strcookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var arr = cookies[i].split("=");
		if (cname == decodeURIComponent(arr[0])) {
			return decodeURIComponent(arr[1]);
		}
	}
}


var btn = document.getElementById('submitSomething');
btn.onclick = function() {
	var names = '123456hfj';
	setcookie({
		name: 'zimo',
		value: names,
		expires: new Date("2018/8/9")
	});
}

var del=document.getElementById('del');
del.onclick=function(){
	removecookie("name","zimo")
}
function aaa() {
	var jsonStr = getcookie({
		name: 'zimo'
	});
}
aaa();