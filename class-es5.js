//  1. 进行类型检测 
//  2.创建原型上的方法和静态方法
//  3.处理原型上的方法和静态方法
// 类型检测  判断是不是new出来的  
// 如果不是实例出来的this是window 
// 编程： 每一个函数 或者组件只 实现一种功能 只做一件事情 
function _classcheck(instance,constructor){
    if(!(instance instanceof constructor)){
       throw new Error('Class constructor Child cannot be invoked without new')
    } 
}
// mydefinePropert处理原型上的方法和静态方法的函数
//target 目标  构造函数的原型 或者 构造函数
//arr 原型上的方法或者静态方法
function mydefinePropert(target,arr){
   for(let i=0;i<arr.length;i++){
      Object.defineProperty(target,arr[i].key,{
        ...arr[i],
        configurable:true, //可配置
        enumerable:true,   // 可枚举
        writable:true    // 可写入

      })
   }
}
// prototypes 原型上的方法
//staicprototypes 静态方法 
//如果是原型上的方法 挂载在构造函数的原型上  如果是静态方法直接挂载到构造函数上
function _creatclass(constructor,prototypes,staicprototypes){
    if(prototypes.length>0){
        mydefinePropert(constructor.prototype,prototypes)
    }
    if(prototypes.length>0){
        mydefinePropert(constructor,staicprototypes)
    }
}
let  Parent = function(){
  function P(){
    _classcheck(this,P);
    _creatclass(P,[
        {
          key:'eat',
          value:function(){
            console.log('吃饭')  
          }
        }
    ],[
      {
          key:'b',
          value:function(){
              return 2
          }
      }])
  }
  return P
}()
// 继承的方法 super() Object.creat 和 Parent.call(this)
function _inherit(subClass,superClass){
    // 继承原型上的方法
   subClass.prototype = Object.create(superClass.prototype,{
       constructor:{value:subClass}
   }) 
   //继承静态方法
   Object.setPrototypeOf(subClass,superClass)
}
let Child  =(function(Parent){
     //继承父类的原型方法和静态方法
     _inherit(C,Parent)
    function C(){
        _classcheck(this,C); 
        //继承私有属性
        let obj = Parent.call(this);
        let that = this;
        // 处理是引用值时候 this指向引用值
        if(typeof obj ==='object'){
            that = obj;
        }
        that.age = 9;
        return that;
    }
    return  C
})(Parent)
let child = new Child()
console.log(Child.b)
console.log(child.eat)