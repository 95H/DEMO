// promise 有个excutor执行器 立即执行
// status定义promise的状态
//value 表示成功的值 
//reason 失败的值 
class Promise {
    constructor(excutor){
         console.log('1234')
        this.status = "pending";
        this.value = undefined;
        this.reason = undefined;
        let  resolve=(value)=>{//成功的时候的状态转换函数
           if(this.status==='pending'){
               this.status='resovled';
               this.value= value;
           } 
        }
        let reject=(reason)=>{//失败的时候的状态转换函数
            if(this.status==='pending'){
                this.status = 'reject';
                this.reason = reason;
            }
        }
        try{
         excutor(resolve,reject)  
        }catch(e){
           reject(e) 
        }
    }
    then(onFufilled,onReject){
        // 如果是成功走成功的回调 如果失败走失败的回调
       if(this.status==='resovled'){
          onFufilled(this.value) 
       }
       if(this.status==='reject'){
           onReject(this.reason)
       }
    }
}

module.exports = Promise;