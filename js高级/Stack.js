/*
使用数组实现一个栈

  push(element): 压栈
  pop(): 出栈
  peek(): 查看栈中的第一个
  size(): 栈的大小
  isEmpty(): 判断栈是否是空的
 */

function Stack() {
  // 每个实例都维护一个自己的数组
  this.dataArr = []
}
Stack.prototype.push = function (element) {
  this.dataArr.push(element)
}

Stack.prototype.pop = function () {
  return this.dataArr.pop()  // 返回删除的元素
}

Stack.prototype.peek = function () {
  return this.dataArr[this.dataArr.length-1]
}

Stack.prototype.size = function () {
  return this.dataArr.length
}

Stack.prototype.isEmpty = function () {
  return this.dataArr.length===0
}