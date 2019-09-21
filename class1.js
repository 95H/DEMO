class Parent {
    constructor(){
        this.name= 'parent'
    }
    static b(){
        return 2
    }
    eat(){
        console.log('eat')
    }
}
class Child extends Parent {
    constructor(){//私有属性
     super(); //Parent.call(this)
     this.age =9;
    }
    static a(){//属于类上的方法
        return 1
    }
    drink(){//原型上的方法
        return '喝水'
    }
}
let child = new Child()
console.log(child.eat())