	/*
		需求：封装cookie操作
			添加
			修改
			删除
			查找
		封装的依据：
			完整形式：[]中是可选项
			document.cookie  = “name=value[;expires=date][;path=path-to-resource][;domain=域名][;secure]”
	       */

		   /*
		设置cookie(含有添加和修改的功能)
		参数：o 表示一个对象
			  o.name		cookie的名称
			  o.value		cookie的值
			  o.expires		过期时间
			  o.path		cookie限定的路径
			  o.domain		cookie域名的限定
			  o.secure		http协议限定 是否是https 
	     */
		function setcookie(a){
			var cookiestr = encodeURIComponent(a.name) + "=" + encodeURIComponent(a.value);
			
			if(a.expires){
				cookiestr+=";expires=" + a.expires;
			}
			if(a.path){
				cookiestr+=";path=" + a.path;
			}
			if(a.domain){
				cookiestr+=";domain=" + a.domain;
			}
			if(a.secure){
				cookiestr+=";secure";
			}
			document.cookie = cookiestr;
		}
		//删除cookie的值
		function removecookie(a){
			var date = new Date();
			 date.setSeconds(-1); 
			 setcookie({
				name:a.name,
				value:a.value,
                expires:date,
				domain:a.domain,
				path:a.path,
				secure:a.secure
			 });
		}
		//获取指定的cookie值
		function getcookie(cname){
			var strcookie = document.cookie;
			var cookies = strcookie.split("; ");
			for(var i = 0;i<cookies.length;i++){
				var arr = cookies[i].split("=");
				if(cname==decodeURIComponent(arr[0])){
					return decodeURIComponent(arr[1]);
				}
			}
		}
