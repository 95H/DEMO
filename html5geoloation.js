var city;

function getCity() {

//判断浏览器是否支持geolocation

if(navigator.geolocation){

// getCurrentPosition支持三个参数

// getSuccess是执行成功的回调函数

// getError是失败的回调函数

// getOptions是一个对象，用于设置getCurrentPosition的参数

// 后两个不是必要参数

var getOptions = {

//是否使用高精度设备，如GPS。默认是true

enableHighAccuracy:true,

//超时时间，单位毫秒，默认为0

timeout:50000,

//使用设置时间内的缓存数据，单位毫秒

//默认为0，即始终请求新数据

//如设为Infinity，则始终使用缓存数据

maximumAge:0

};

//成功回调

function getSuccess(position){
// getCurrentPosition执行成功后，会把getSuccess传一个position对象

// position有两个属性，coords和timeStamp

// coords是一个对象，包含了地理位置数据

console.log(position.coords.latitude);

var gg_lon = position.coords.longitude;

var gg_lat =  position.coords.latitude;

// 估算的经度

console.log(position.coords.longitude);

// 所得经度和纬度的估算精度，以米为单位

console.log(position.coords.accuracy);

var gc = new BMap.Geocoder();

var pointAdd = new BMap.Point(gg_lon, gg_lat);

gc.getLocation(pointAdd, function(rs){

// 百度地图解析城市名

city = rs.addressComponents.city;

alert(city)

localStorage.clear();

//或者任何你想要的其他信息

// if(localStorage){

//    localStorage.clear();

//    localStorage.setItem('mycity',city)

//    }

})

}

//失败回调

function getError(error){

// 执行失败的回调函数，会接受一个error对象作为参数

// error拥有一个code属性和三个常量属性TIMEOUT、PERMISSION_DENIED、POSITION_UNAVAILABLE

// 执行失败时，code属性会指向三个常量中的一个，从而指明错误原因

switch(error.code){

case error.TIMEOUT:

console.log('超时');

break;

case error.PERMISSION_DENIED:

console.log('用户拒绝提供地理位置');

break;

case error.POSITION_UNAVAILABLE:

console.log('地理位置不可用');

break;

default:

break;

}

}

navigator.geolocation.getCurrentPosition(getSuccess, getError, getOptions);

// watchPosition方法一样可以设置三个参数

// 使用方法和getCurrentPosition方法一致，只是执行效果不同。

// getCurrentPosition只执行一次

// watchPosition只要设备位置发生变化，就会执行

var watcher_id = navigator.geolocation.watchPosition(getSuccess, getError, getOptions);

//clearwatch用于终止watchPosition方法

navigator.geolocation.clearWatch(watcher_id);

}

}

getCity();