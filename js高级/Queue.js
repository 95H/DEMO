/*
队列: 使用数组实现

enqueue(element): 加入队列
dequeue(): 删除队列的第一个
peek(): 查看队列的第一个
size(): 队列的大小
isEmpty(): 判断队列是否是空的
 */
function Queue() {
  // 每个实例都维护一个自己的数组
  this.dataArr = []
}
Queue.prototype.enqueue = function (element) {
  this.dataArr.push(element)
}

Queue.prototype.dequeue = function () {
  return this.dataArr.shift()  // 返回删除的元素
}

Queue.prototype.peek = function () {
  return this.dataArr[0]
}

Queue.prototype.size = function () {
  return this.dataArr.length
}

Queue.prototype.isEmpty = function () {
  return this.dataArr.length===0
}

